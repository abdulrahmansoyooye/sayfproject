"use server";

import { Podcasts } from "@/models/podcasts";
import { connectToDb } from "../db";

export const getPodcasts = async () => {
  console.log("fetching Podcasts");
  await connectToDb();
  try {
    const podcasts = await Podcasts.find({});

    const response = JSON.parse(JSON.stringify(podcasts));
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const getEachPodcast = async (id) => {
  console.log("fetching this podcast");
  await connectToDb();
  try {
    const podcast = await Podcasts.findById(id);

    const response = JSON.parse(JSON.stringify(podcast));
    return response;
  } catch (error) {
    console.log(error);
  }
};
