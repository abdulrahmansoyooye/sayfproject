"use client";
import Welcome from "@/components/Welcome";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getPodcasts } from "@/utils/actions/podcatsActions";
import { useRouter } from "next/navigation";
import Loading from "../loading";

const Podcasts = () => {
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
        tag.toLowerCase().includes(inputValue)
    );

    setSearchedPodcasts(filteredPodcast);
  };

  useEffect(() => {
    async function fetchpodcasts() {
      try {
        const res = await getPodcasts();
        console.log(res);
        setAllPodcasts(res.reverse());
      } catch (error) {
        setError("Failed to fetch podcasts");
      }
    }
    fetchpodcasts();
  }, []);

  return (
    <div className="flex flex-col gap-[4rem]">
      <Welcome title="Podcasts" text="Some podcasts for you to read" />

      <div className="flex gap-[2rem] flex-col">
        <h1 className="text-[2rem] text-center flex items-center gap-[1rem] flex-col">
          <div>
            Daily <span className="text-gradient-brown">Podcasts</span>
            <br className="breaker-style" />
          </div>
        </h1>
        <div className="relative w-[60%] max-lg:w-[80%] m-auto">
          <input
            value={searchText}
            className="search_input "
            placeholder="Search For Podcasts"
            onChange={handleSearchPodcast}
          />
          <div className="absolute top-3 right-3 cursor-pointer bg-slate-200 rounded-[50%] p-[0.5rem]"></div>
        </div>

        <div className="flex gap-[2rem] p-[2rem] flex-wrap max-lg:flex-col justify-center sm:m-auto">
          {searchText ? (
            searchedPodcast.length > 0 ? (
              <PodcastCardList data={searchedPodcast} />
            ) : (
              <div className="text-center text-[1.5rem]">Not Found</div>
            )
          ) : allpodcasts.length > 0 ? (
            <PodcastCardList data={allpodcasts} />
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </div>
  );
};
export const PodcastCardList = ({ data }) => {
  return data.map(
    (
      { _id, title, createdAt, description, tag, audioUrl, imageUrl },
      index
    ) => (
      <PodcastCard
        key={_id}
        _id={_id}
        title={title}
        createdAt={createdAt}
        description={description}
        tag={tag}
        audioUrl={audioUrl}
        imageUrl={imageUrl}
      />
    )
  );
};
export const PodcastCard = ({
  _id,
  title,
  createdAt,
  description,
  tag,
  audioUrl,
  imageUrl,
}) => {
  const router = useRouter();

  const format = (type, createdAt) => {
    if (type == "date") {
      return `${new Date(createdAt)
        .getDate()
        .toString()
        .padStart(2, "0")}/${new Date(createdAt)
        .getMonth()
        .toString()
        .padStart(2, "0")}/${new Date(createdAt)
        .getFullYear()
        .toString()
        .padStart(2, "0")}`;
    } else {
      return `${new Date(createdAt)
        .getHours()
        .toString()
        .padStart(2, "0")}:${new Date(createdAt)
        .getMinutes()
        .toString()
        .padStart(2, "0")}:${new Date(createdAt)
        .getSeconds()
        .toString()
        .padStart(2, "0")}`;
    }
  };

  return (
    <div
      className="container flex-col gap-[4rem] cursor-pointer"
      onClick={() => router.push(`/podcasts/${_id}`)}
    >
      <div className="flex-between flex-wrap gap-[0.5rem]">
        <div className="flex flex-col ">
          <h2 className="text-[1.5rem]">{title}</h2>
          <p className="text-[15px] text-gray-500 font-[300]">
            {" "}
            {description.slice(0, 80)}
          </p>
        </div>

        <div className="flex flex-col text-[11px] bg-slate-200 p-[0.8rem] rounded-md font-[300]">
          #{tag}
        </div>
      </div>
      <div className="flex flex-col ">
        <img
          src={"/assets/article3.jpg"}
          className="w-full h-[250px] object-cover rounded-md "
          alt="article-img"
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
        <div>{format("time", createdAt)}</div>
        <div>{format("date", createdAt)}</div>
      </div>
    </div>
  );
};
export default Podcasts;
