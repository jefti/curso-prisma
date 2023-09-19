import Joi from "joi";
import { CreatePost } from "../repositories/post-repository";

export const postSchema = Joi.object<CreatePost>({
  username: Joi.string().required(),
  title: Joi.string().required(),
  body: Joi.string().required(),
  createdAt: Joi.string().regex(/^\d{4}\/\d{2}\/\d{2}$/).optional().default(() => new Date().toISOString())
})