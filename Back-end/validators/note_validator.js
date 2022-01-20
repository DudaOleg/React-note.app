const Joi = require('joi');

const create = Joi.object({
    name: Joi.string().required(),
    category: Joi.string().required(),
    content: Joi.string().required(),
    dates: Joi.array()
});

const update = Joi.object({
    content: Joi.string().required()
});

module.exports = {
    create, update
}
