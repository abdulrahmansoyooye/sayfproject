"use client";
import {
  getEachPodcast,
  getRelatedPodcasts,
} from "@/utils/actions/podcatsActions";
import Error from "next/error";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const { podcastId } = useParams();
  const [error, setError] = useState("");
  const [podcastData, setPodcastData] = useState({});
  const [relatedPodcastData, setrelatedPodcastData] = useState([]);
  const { _id, title, description, imageUrl, category, tag, audio } =
    podcastData;
  const router = useRouter();

  useEffect(() => {
    async function fetchpodcasts() {
      try {
        const res = await getEachPodcast(podcastId);
        setPodcastData(res);
      } catch (error) {
        setError("Something went wrong. Try Again");
      }
    }
    fetchpodcasts();
  }, []);
  useEffect(() => {
    async function fetchRelatedPodcasts() {
      try {
        const res = await getRelatedPodcasts(category, _id);
        setrelatedPodcastData(res);
      } catch (error) {
        setError("Something went wrong. Try Again");
      }
    }
    fetchRelatedPodcasts();
  }, [category]);
  return (
    <div className="flex max-lg:flex-col gap-[4rem] mt-[3rem] p-[5rem_2rem] max-lg:p-[4rem_1rem]  serif bg-[#f6f6f6] rubik">
      {error && <Error />}

      <div className="flex flex-col gap-[1rem] bg-white w-[70%] max-lg:w-full p-[1rem] rounded-lg ">
        <div className="text-[0.9rem] bg-brown-color text-white rounded-lg w-[30%] max-lg:w-full m-auto font-[300] text-center">
          {category}
        </div>
        <div className="flex max-lg:flex-col gap-[2rem] w-full">
          {imageUrl && (
            <img
              src={imageUrl}
              className=" w-full h-[200px] border object-contain  rounded-lg "
              alt="article-img"
            />
          )}

          <div className="flex flex-col gap-[2rem] w-full">
            <div className="flex flex-col  gap-[1rem] flex-wrap">
              <div className="text-[2rem] font-[400] text-black">{title}</div>
              <div className="bg-slate-100 p-[0.5rem]  rounded-lg text-[0.75rem] flex-0 max-w-[30%] font-[300]">
                #{tag}
              </div>
              <div className="text-black font-[200]">{description}</div>
            </div>
            <div className="flex flex-col gap-[1rem] ">
              <div className="flex justify-between items-center gap-[1rem] rounded-lg cursor-pointer">
                <audio src={audio} controls>
                  Your browser does not support the audio element.
                </audio>
                <a
                  href={audio}
                  className="bg-[#f1f3f4] rounded-[50%] p-4 hover:bg-slate-200 transition-colors duration-300 ease-in-out "
                  download
                >
                  <Image
                    width={20}
                    height={20}
                    src={"/assets/download.png"}
                    alt="download"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className=" flex flex-col max-lg:w-full w-[30%] gap-[1rem]">
        <div className="text-[1.2rem] font-[500]  bg-white p-[1rem] rounded-lg w-full">
          More Podcasts
        </div>

        {relatedPodcastData.length > 0 ? (
          <div className="flex flex-col gap-[1rem]">
            {relatedPodcastData.map(({ _id, title, imageUrl }) => (
              <div
                className="flex bg-white p-[1rem] rounded-lg gap-[1rem] cursor-pointer justify-between"
                key={_id}
                onClick={() => router.push(`/podcasts/${_id}`)}
              >
                <div>
                  <div> {title}</div>
                </div>
                <img
                  src={imageUrl}
                  className="w-[50%] h-[150px] object-cover rounded-lg "
                  alt="article-img"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center bg-white p-[1rem] rounded-lg cursor-pointer">
            No related Podcast
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
