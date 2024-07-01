"use server";
import { Resources } from "@/models/resources";
import { connectToDb } from "../db";

export const getResources = async (category) => {
  console.log("fetching Resources");
  await connectToDb();
  try {
    
      const res = await Resources.find({});

      return JSON.parse(JSON.stringify(res.reverse()));
    } 
   catch (error) {
    console.log(error);
  }
};





