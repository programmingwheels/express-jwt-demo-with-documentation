import express from 'express';
import validation from '../config/validation';
import expressValidation from 'express-validation';
import userCtrl from '../controllers/user.controller.js'


const router = express.Router();
/**
 * @api {post} /api/v1/register Register User
 * @apiName Register
 * @apiGroup UserAPI
 *
 * @apiParamExample {json} Request Body Example:
 *     {
 *       'firstname': 'John',
 *       'lastname': 'Doe',
 *       'email': 'leninlawrence@gmail.com',
 *       'password':'password'
 *     }

 *
 * @apiSuccess {String} message Success message.

 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *    "message": "A verification mail has been sent to your registered mail."
 *    }
 *
 * @apiError UserAlreadyExist 409 User with same email ID already exists.
 * @apiError BadRequest 400 input validation errors.
 *
 * @apiErrorExample UserAlreadyExist 409:
 *     HTTP/1.1 409 Not Found
 *     {
 *       'errmsg': 'User with the same email ID already exists'
 *     }
 * @apiErrorExample BadRequest:
 *     HTTP/1.1 400 BadRequest
 *     {
 *    "status": 400,
 *    "statusText": "Bad Request",
 *    "errors": [
 *        {
 *            "field": [
 *                "password"
 *            ],
 *            "location": "body",
 *            "messages": [
 *                "\"password\" is required"
 *            ],
 *            "types": [
 *                "any.required"
 *            ]
 *        }
 *    ]
 *  }
 *
 * @apiExample {curl} Example usage:
 *     curl -H "Content-Type: application/json" \
 *          -d "{'firstname' : 'John', 'lastname': 'Doe Foo','email':'lenin@gmail.com','password':'password'}" \
 *          -X POST http://localhost:3000/api/v1/register


 */
router.post('/register',expressValidation(validation.register),userCtrl.registerUser)

/**
 * @api {post} /api/v1/login Login User
 * @apiName Login
 * @apiGroup UserAPI
 *
 * @apiParamExample {json} Request Body Example:
 *     {
 *       'email': 'leninlawrence@gmail.com',
 *       'password':'password'
 *     }

 *

* @apiSuccess {String} token JWT Token generated.
* @apiSuccess {Object} user  info of the user.
*
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
*       'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ',
        'user':{
           "firstname": "Lenin",
           "lastname": "Lawrence",
           "email": "leninlawrence@gmail.com",
           "_id": "5a1cdbd47362b905c06746a1"
         }
*
*     }
*
 * @apiError UserDoesntExist 400 User with same email ID already exists.
 * @apiError wrongPassword 400 User with same email ID already exists.
 * @apiError BadRequest 400 input validation errors.
 *
 * @apiErrorExample UserDoesntExist:
 *     HTTP/1.1 400 Not Found
 *     {
 *       'errmsg': "user with entered email doesnt exist"
 *     }
 * @apiErrorExample wrongPassword :
 *     HTTP/1.1 400 Not Found
 *     {
 *       'errmsg': "wrong Password"
 *     }
 * @apiErrorExample BadRequest:
 *     HTTP/1.1 400 BadRequest
 *     {
 *    "status": 400,
 *    "statusText": "Bad Request",
 *    "errors": [
 *        {
 *            "field": [
 *                "password"
 *            ],
 *            "location": "body",
 *            "messages": [
 *                "\"password\" is required"
 *            ],
 *            "types": [
 *                "any.required"
 *            ]
 *        }
 *    ]
 *  }
 *
 * @apiExample {curl} Example usage:
 *     curl -H "Content-Type: application/json" \
 *          -d "{'email':'lenin@gmail.com','password':'password'}" \
 *          -X POST http://localhost:3000/api/v1/login


 */
router.post('/login',expressValidation(validation.login),userCtrl.loginUser);


export default router;
