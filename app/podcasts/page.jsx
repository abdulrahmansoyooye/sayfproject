"use client";
import Welcome from "@/components/Welcome";
import Image from "next/image";
import { Link } from "next/navigation";
import { useEffect, useState } from "react";
import {
  getPodcastCategories,
  getPodcasts,
} from "@/utils/actions/podcatsActions";
import Loading from "../loading";

const Podcasts = () => {
  const [allpodcasts, setAllPodcasts] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("All");
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");

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
        const res = await getPodcasts("All");

        setAllPodcasts(res);
      } catch (error) {
        setError("Something went wrong. Try Againrong. Try Againrong. Try Againrong. Try Againrong. Try Againrong. Try Againrong. Try Againrong. Try Againrong. Try Againrong. Try Againrong. Try Againrong. Try Againpodcasts");
      }
    }
    async function fetchPodcastCategories() {
      try {
        const res = await getPodcastCategories();
        setCategories(res);
      } catch (error) {
        setMessage(error.message);
      }
    }
    fetchPodcastCategories();
    fetchpodcasts();
  }, []);
  const handleCategoryClick = async (category) => {
    setCurrentCategory(category);
    setAllPodcasts([]);
    try {
      const res = await getPodcasts(category);

      setAllPodcasts(res);
    } catch (error) {
      setError("Something went wrong. Try Againrong. Try Againrong. Try Againrong. Try Againrong. Try Againrong. Try Againrong. Try Againrong. Try Againrong. Try Againrong. Try Againrong. Try Againrong. Try AgainPodcasts");
    }
  };
  console.log(categories);
  return (
    <div className="flex flex-col gap-[4rem]">
      <Welcome title="Podcasts" text="Some podcasts for you to read" />

      <div className="flex flex-col gap-[2rem] p-[2rem] ">
        {/* {error && <p>{error}</p>} */}

        {/* Search */}
        <div className="flex flex-col gap-[1rem]">
          <div className="text-[2rem] text-center flex items-center gap-[1rem] flex-col">
            <div>
              Daily <span className="text-gradient-brown">Podcasts</span>
              <br className="breaker-style" />
            </div>
          </div>
          <div className="relative max-lg:w-full m-auto">
            <input
              value={searchText}
              className="search_input container w-full"
              placeholder="Search For Podcasts"
              onChange={handleSearchPodcast}
            />
            <div className="absolute top-3 right-3 cursor-pointer bg-slate-200 rounded-[50%] p-[0.5rem]">
              {" "}
              <Image
                src={"/assets/search.png"}
                width={20}
                height={20}
                alt="search"
              />
            </div>
          </div>
        </div>
        {/* Categories */}

        <div className="flex gap-[1rem] justify-center flex-wrap  items-center">
          <div
            className={`cursor-pointer  hover:border-brown-color p-[0.5rem] transition-all duration-500   bg-primary-color rounded-md  text-center w-[150px]  ${
              currentCategory == "All" && "border border-1 border-brown-color"
            }`}
            onClick={() => handleCategoryClick("All")}
          >
            <h1 className="font-[400]">All</h1>
          </div>
          {categories &&
            categories.map((category) => (
              <div
                className={`cursor-pointer border hover:border-brown-color p-[0.5rem] transition-all duration-500 bg-primary-color  border-1 rounded-md  text-center  ${
                  category == currentCategory && "border-brown-color"
                }`}
                onClick={() => handleCategoryClick(category)}
                key={category}
              >
                <div className="font-[400]">{category}</div>
              </div>
            ))}
        </div>

        {/* Podcast Item */}
        <div className="flex gap-[2rem] flex-wrap max-lg:flex-col justify-center ">
          {searchText ? (
            searchedPodcast.length > 0 ? (
              <div>Not Found</div>
            ) : (
              <PodcastCardList data={searchedPodcast} />
              // <div className="text-center text-[1.5rem]">Not Found</div>
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
  return (
    <div className=" border-alt-color border-2 rounded-md w-[35%] max-lg:w-full transition-all duration-300">
      <div className="">
        <div className="w-full">
          <img
            src={"/assets/article3.jpg"}
            className="w-full h-[250px] object-cover rounded-md "
            alt="article-img"
          />
        </div>
        <div className="flex flex-col gap-[2rem] p-[1rem]">
          <div className="flex justify-between flex-wrap gap-[0.5rem]">
            <div className="text-[1.5rem] font-[500]">{title}</div>
            <div className="bg-slate-100 p-[0.5rem] text-slate-700 rounded-md text-[0.75rem]">
              #{tag}
            </div>
          </div>

          <div className="font-[400]">{description}</div>
          <div className="flex w-full hover:text-primary-color ">
            {" "}
            <a href={`/podcasts/${_id}`} className="font-[400] cursor-pointer">
              {" "}
              See Podcast
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Podcasts;

// const format = (type, createdAt) => {
//   if (type == "date") {
//     return `${new Date(createdAt)
//       .getDate()
//       .toString()
//       .padStart(2, "0")}/${new Date(createdAt)
//       .getMonth()
//       .toString()
//       .padStart(2, "0")}/${new Date(createdAt)
//       .getFullYear()
//       .toString()
//       .padStart(2, "0")}`;
//   } else {
//     return `${new Date(createdAt)
//       .getHours()
//       .toString()
//       .padStart(2, "0")}:${new Date(createdAt)
//       .getMinutes()
//       .toString()
//       .padStart(2, "0")}:${new Date(createdAt)
//       .getSeconds()
//       .toString()
//       .padStart(2, "0")}`;
//   }
// };
