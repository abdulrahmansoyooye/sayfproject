import { mongoose, models } from "mongoose";
import { Schema } from "mongoose";

export const ArticleSchema = new Schema(
  {
    title: String,
    content: String,
    imageUrl: String,
  },
  {
    timestamps: true,
  }
);

export const Articles =
  models.Articles || mongoose.model("Articles", ArticleSchema);
