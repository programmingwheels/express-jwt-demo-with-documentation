import mongoose from 'mongoose';
import util from 'util';
import dotenv from 'dotenv';
dotenv.config({path: './local.env' })

import app from './config/app';

Promise = require('bluebird');
mongoose.Promise = Promise;

const mongoUri = process.env.MONGO_URI;
mongoose.connect(mongoUri, { server: { socketOptions: { keepAlive: 1 } } });
mongoose.connection.on('error',()=>{
   throw new Error(`unable to connect to database: ${mongoUri}`);
})
app.listen(process.env.PORT,()=>{
   console.log(`App is listening on the port ${process.env.PORT}` )
})

module.exports= app;
