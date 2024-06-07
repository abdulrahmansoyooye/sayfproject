import mongoose, { Schema, models } from "mongoose";
import { ArticleSchema } from "./articles";

const CategorySchema = new Schema({
  name: { type: String, required: true },
  articles: [ArticleSchema],
});
export const Category =
  models.Category || mongoose.model("Category", CategorySchema);
