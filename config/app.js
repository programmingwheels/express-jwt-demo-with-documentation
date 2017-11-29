import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'; // cors middleware makes the life easier to handle cross origin requests
import expressValidation from 'express-validation'; // expres-validation is used for validation
import helmet from 'helmet'; // helmet is for security purpose. It will add custom headers there by can prevent CSRF,XSS etc
import path from 'path';
import route from '../routes/index.route.js'


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// Serving static files from "public" folder
app.use(express.static('public'));

import logger from './winston';
// secure apps by setting various HTTP headers
app.use(helmet());

// enable CORS - Cross Origin Resource Sharing
app.use(cors());
app.use(function(req,res,next){
   // loggin the request method url and status code of the response
  logger.log('info', `HTTP ${req.method} ${req.url} ${res.statusCode} `);
  next();
})
app.use('/api/v1',route);

app.use(function(err, req, res, next){
  // default error handler. This will catch all the express-validation error message and pass it to the response.
  if(err instanceof expressValidation.ValidationError)
      return res.status(400).json(err)
  else{
    // if it is not express validation error , then it will be logged and will send response status 500
      logger.log('error', err);
      return res.status(500).json(err)
  }

});

export default app;
