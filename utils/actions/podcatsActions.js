"use server";
import { Podcasts } from "@/models/podcasts";
import { connectToDb } from "../db";

export const getPodcasts = async (category) => {
  console.log("fetching Podcasts");
  await connectToDb();
  try {
    if (category == "All") {
      const res = await Podcasts.find({});

      return JSON.parse(JSON.stringify(res.reverse()));
    } else {
      const foundCategory = await Podcasts.find({ category });
      if (!foundCategory) {
        return {
          message: `"${category}" wasn't found`,
          status: 404,
        };
      }
      return JSON.parse(JSON.stringify(foundCategory));
    }
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

export const getPodcastCategories = async () => {
  await connectToDb();
  try {
    const podcasts = await Podcasts.find({});
    const foundCategory = podcasts.map(({ category }) => category);
    const formattedCateogries = [...new Set(foundCategory)];

    const response = JSON.parse(JSON.stringify(formattedCateogries));
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getRelatedPodcasts = async (podcastId) => {
  await connectToDb();
  try {
    const foundPodcast = await Podcasts.findById(podcastId);

    const relatedPodcasts = await Podcasts.find({
      category: foundPodcast.category,
    });
    console.log(JSON.stringify(foundPodcast._id));
    const filteredPodcast = relatedPodcasts.filter(
      ({ _id }) => _id == JSON.stringify(foundPodcast._id)
    );
    const response = JSON.parse(JSON.stringify(filteredPodcast));
    return response;
  } catch (error) {
    console.log(error);
  }
};
