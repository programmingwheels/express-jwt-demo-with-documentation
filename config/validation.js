import Joi from 'joi';

export default {
  // POST /api/v1/register
  register: {
    body: {
      email: Joi.string().email().required(),
      password: Joi.string().required().min(6).max(10),
      firstname:Joi.string().required(),
      lastname:Joi.string().required()
    }
  },



  // POST /api/v1/login
  login: {
    body: {
      email: Joi.string().email().required(),
      password: Joi.string().required()
    }
  }
};
