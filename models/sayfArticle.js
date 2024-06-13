import { mongoose, models } from "mongoose";
import { Schema } from "mongoose";

export const sayfArticleSchema = new Schema(
  {
    title: String,
    content: String,
    category: String,
  },
  {
    timestamps: true,
  }
);

export const sayfArticle =
  models.sayfArticle || mongoose.model("sayfArticle", sayfArticleSchema);
