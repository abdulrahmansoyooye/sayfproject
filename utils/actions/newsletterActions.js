"use server";
import { Newsletter } from "@/models/newsletter";
import { connectToDb } from "../db";

export const getNewsletter = async () => {
  console.log("fetching Newsletter");
  await connectToDb();
  try {
    const newsletter = await Newsletter.find({});

    const response = JSON.parse(JSON.stringify(newsletter));
    return response;
  } catch (error) {
    console.log(error);
  }
};
