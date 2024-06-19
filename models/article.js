import { mongoose, models } from "mongoose";
import { Schema } from "mongoose";

export const articleSchema = new Schema(
  {
    title: String,
    content: String,
    category: String,
    imageUrl: String,
  },
  {
    timestamps: true,
  }
);

export const article =
  models.sayfArticle || mongoose.model("article", article);
