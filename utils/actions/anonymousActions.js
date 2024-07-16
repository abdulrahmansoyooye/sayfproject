"use server";
import { Anonymous } from "@/models/anonymous";
import { connectToDb } from "../db";

export const createMessage = async (content) => {
  await connectToDb();

  try {
    await Anonymous.create({
      content,
    });
    return { message: "Anonymous Message has been Sent", status: 201 };
  } catch (error) {
    console.log(error);
  }
};
