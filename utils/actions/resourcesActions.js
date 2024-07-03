"use server";
import { Resources } from "@/models/resources";
import { connectToDb } from "../db";

export const getResources = async () => {
  console.log("fetching Resources");
  await connectToDb();
  try {
    const res = await Resources.find({});

    return JSON.parse(JSON.stringify(res.reverse()));
  } catch (error) {
    console.log(error);
  }
};

export const getEachResources = async (id) => {
  await connectToDb();
  try {
    const resources = await Resources.findById(id);

    const response = JSON.parse(JSON.stringify(resources));
    return response;
  } catch (error) {
    console.log(error);
  }
};
