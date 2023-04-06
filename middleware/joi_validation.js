const Joi = require('joi');

// Validate request object
const validateRequest = (req, res, next, schema) => {
  const { error, value } = schema.validate(req.body);
  if (error) {
    res.status(400).send({
      status: 400,
      success: false,
      message: error.details.map((x) => x.message).join(', ')
    });
  } else {
    req.body = value;
    next();
  }
};

const create_user = (req, res, next) => {
  const JoiSchema = Joi.object({
    user_name: Joi.string().min(5).max(30).required(),
    password: Joi.string()
      .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
      .min(5)
      .max(15)
      .required(),
    first_name: Joi.string().min(5).max(30).required(),
    last_name: Joi.string().min(5).max(30).required()
  }).options({ abortEarly: false });

  validateRequest(req, res, next, JoiSchema);
};

module.exports = {
  create_user
};
