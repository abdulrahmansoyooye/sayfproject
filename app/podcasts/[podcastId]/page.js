"use client";
import { getEachPodcast } from "@/utils/actions/podcatsActions";
import Error from "next/error";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const { podcastId } = useParams();
  const [error, setError] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("");
  const router = useRouter();

  useEffect(() => {
    async function fetchpodcasts() {
      try {
        const res = await getEachPodcast(podcastId);
        setTitle(res.title);
        setDescription(res.description);
        setTag(res.tag);
      } catch (error) {
        setError("Failed to fetch podcasts");
      }
    }
    fetchpodcasts();
  }, []);

  return (
    <div className="flex max-lg:flex-col gap-[4rem] mt-[6rem] p-[3rem_2rem] max-lg:p-[4rem_1rem] border serif bg-[#f6f6f6] ">
      {error && <Error />}

      <div className="flex max-lg:flex-col gap-[2rem] bg-white w-full p-[1rem] rounded-md ">
        <img
          src={"/assets/article3.jpg"}
          className="max-lg:w-full h-[250px] object-cover rounded-md "
          alt="article-img"
        />

        <div className="flex flex-col gap-[2rem] justify-between w-full">
          <div className="flex flex-col  gap-[0.5rem] flex-wrap">
            <div className="text-[2rem] font-[500] dark-text ">{title}</div>
            <div className="bg-slate-100 p-[0.5rem] text-slate-700 rounded-md text-[0.75rem] flex-0 max-w-[30%] font-[300]">
              #{tag}
            </div>
            <div className="text-slate-700 ">{description}</div>
          </div>
          <div className="flex flex-col gap-[1rem] ">
            <div className="flex justify-between items-center gap-[1rem] rounded-[1rem] cursor-pointer">
              <audio src={""} controls>
                Your browser does not support the audio element.
              </audio>
              <a
                href={""}
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
      {/*  */}
      {/* <div>
        <div className="text-[1.2rem] font-[500] bg-white p-[1rem] rounded-md">
          See Related podcasts
        </div>
      </div> */}
    </div>
  );
};

export default page;
