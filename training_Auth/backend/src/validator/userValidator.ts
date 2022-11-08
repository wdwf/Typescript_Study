import Joi from "joi";

type Tvalidate = {
  schema: object;
  payload?: any;
  validate: any;
}

const userValidator = (schema: Tvalidate) => (payload: Tvalidate) =>
  schema.validate(payload, { abortEarly: false });


const createUserSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).max(10).required(),
  // confirmPassword: Joi.ref('passwaord'),
  // address: {
  //   state: Joi.string().length(2).required(),
  // },
  // DOB: Joi.date().greater(new Date("2012-01-01")).required()
  // hobbies: Joi.array().items(Joi.string())
})

export const validateCreate = userValidator(createUserSchema)