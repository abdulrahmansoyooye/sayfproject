"use client";
import { motion } from "framer-motion";
import Welcome from "@/components/Welcome";
import SearchInput from "@/components/SearchInput";
import { client } from "@/config/sanityClient";
import Image from "next/image";
import { urlFor } from "@/lib/imageUrl";
import { useEffect, useState } from "react";

const Podcasts = ({ searchParams }) => {
  let page = parseInt(searchParams.page, 10);
  console.log(page)
  const [allpodcasts, setAllPodcasts] = useState([]);

  // Search
  const [searchText, setSearchText] = useState("");
  const [searchedPodcast, setSearchedPodcasts] = useState([]);

  const handleSearchPodcast = (e) => {
    setSearchText(e.target.value);

    const inputValue = e.target.value.toLowerCase();

    const filteredPodcast = allpodcasts.filter(
      ({ title, description, tag }) =>
        title.toLowerCase().includes(inputValue) ||
        description.toLowerCase().includes(inputValue) ||
        tag.current.toLowerCase().includes(inputValue)
    );

    setSearchedPodcasts(filteredPodcast);
  };

  useEffect(() => {
    (async () => {
      const response = await client.fetch(`*[_type == "podcast"]{
        title,
        description,
        _createdAt,
        "imageUrl": Image.asset->url,
        "audioUrl":AudioFile.asset -> url,
        tag
          
      }`);
      setAllPodcasts(response);
    })();
  }, []);

  return (
    <div className="flex flex-col gap-[4rem]">
      <Welcome title={"Podcasts"} />

      <div className="flex gap-[2rem] flex-col">
        <h1 className="text-[3rem] text-center flex items-center gap-[1rem] flex-col">
          <div>
            Daily <span className="text-gradient-orange">Podcasts</span>
            <br className="breaker-style" />
          </div>
        </h1>
        <div className="relative w-[60%] max-md:w-[80%] m-auto">
          <input
            value={searchText}
            className="search_input glassmorphism"
            placeholder="Search For Podcasts"
            onChange={handleSearchPodcast}
          />
          <div className="absolute top-3 right-3 cursor-pointer bg-slate-200 rounded-[50%] p-[0.5rem]">
            <Image
              src={"/assets/search.png"}
              width={20}
              height={20}
              alt="loading"
            />
          </div>
        </div>

        <div className="flex gap-[2rem] md:max-w-[1080px] m-auto  p-[2rem] flex-wrap max-md:flex-col justify-center ">
          {searchText ? (
            searchedPodcast.length > 0 ? (
              <PodcastCardList data={searchedPodcast} />
            ) : (
              <div>Couldn't Find</div>
            )
          ) : allpodcasts.length > 0 ? (
            <PodcastCardList data={allpodcasts} />
          ) : (
            <Image
              src={"/assets/loading.svg"}
              width={40}
              height={40}
              alt="loading"
            />
          )}
        </div>
      </div>
    </div>
  );
};
export const PodcastCardList = ({ data }) => {
  return data.map(
    ({ title, _createdAt, description, tag, audioUrl, imageUrl }, index) => (
      <PodcastCard
        key={`${tag}-${index}`}
        title={title}
        _createdAt={_createdAt}
        description={description}
        tag={tag}
        audioUrl={audioUrl}
        imageUrl={imageUrl}
      />
    )
  );
};
export const PodcastCard = ({
  title,
  _createdAt,
  description,
  tag,
  audioUrl,
  imageUrl,
}) => {
  const format = (type, _createdAt) => {
    if (type == "date") {
      return `${new Date(_createdAt)
        .getDate()
        .toString()
        .padStart(2, "0")}/${new Date(_createdAt)
        .getMonth()
        .toString()
        .padStart(2, "0")}/${new Date(_createdAt)
        .getFullYear()
        .toString()
        .padStart(2, "0")}`;
    } else {
      return `${new Date(_createdAt)
        .getHours()
        .toString()
        .padStart(2, "0")}:${new Date(_createdAt)
        .getMinutes()
        .toString()
        .padStart(2, "0")}:${new Date(_createdAt)
        .getSeconds()
        .toString()
        .padStart(2, "0")}`;
    }
  };
  return (
    <div
      className={`podcast glassmorphism flex-col gap-[4rem]`}
      // data-aos="fade-up"
    >
      <div className="flex-between">
        <div className="flex flex-col ">
          <h2 className="text-[1.5rem]">{title}</h2>
          <p className="text-[12px] text-gray-500"> {description}</p>
        </div>

        <div className="flex flex-col text-[11px] bg-slate-200 p-[0.8rem] rounded-[1rem]">
          #{tag.current}
        </div>
      </div>
      <div className="flex flex-col ">
        <img
          src={imageUrl && urlFor(imageUrl).url()}
          alt="podcast-image"
          className="rounded-[1rem] w-full h-[240px] object-cover"
        />
      </div>
      <div className="flex justify-between items-center gap-[1rem] rounded-[1rem] cursor-pointer">
        <audio src={audioUrl} controls>
          Your browser does not support the audio element.
        </audio>
        <a
          href={audioUrl}
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

      <div className="flex-between text-[11px] text-slate-500">
        <div>{format("time", _createdAt)}</div>
        <div>{format("date", _createdAt)}</div>
      </div>
    </div>
  );
};
export default Podcasts;
