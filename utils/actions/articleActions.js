"use server";

import { Articles } from "@/models/articles";
import { connectToDb } from "../db";
import { Category } from "@/models/categories";

export const getArticles = async (name) => {
    console.log("fetching Articles");
    await connectToDb();
    try {
      if (name == "All") {
        const articles = await Articles.find({});
  
        return JSON.parse(JSON.stringify(articles.reverse()));
      } else {
        const foundCategory = await Category.findOne({ name });
        if (!foundCategory) {
          return {
            message: `"${name}" wasn't found`,
            status: 404,
          };
        }
  
        return JSON.parse(JSON.stringify(foundCategory.articles.reverse()));
      }
    } catch (error) {
      console.log(error);
    }
  };
  export const getEachArticle = async (id) => {
    console.log("fetching this article");
    await connectToDb();
    try {
      const articles = await Articles.findById(id);
  
      return JSON.parse(JSON.stringify(articles));
    } catch (error) {
      console.log(error);
    }
  };
  
  export const getCategory = async () => {
    await connectToDb();
    try {
      const category = await Category.find({});
  
      const response = JSON.parse(JSON.stringify(category));
      return response;
    } catch (error) {
      console.log(error);
    }
  };