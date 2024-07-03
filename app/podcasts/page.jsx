"use client";
import Welcome from "@/components/Welcome";
import Image from "next/image";
import { Link, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  getPodcastCategories,
  getPodcasts,
} from "@/utils/actions/podcatsActions";
import Loading from "../loading";
import moment from "moment";
import Paginate from "@/components/Paginate";
const PODCAST_PER_PAGE = 2;
const Podcasts = () => {
  const [allpodcasts, setAllPodcasts] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("All");
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");
  const [isCategoryToggle, setIsCategoryToggle] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const indexofLastArticle = currentPage * PODCAST_PER_PAGE;
  const indexofFirstArticle = indexofLastArticle - PODCAST_PER_PAGE;
  const currentPodcast = allpodcasts.slice(
    indexofFirstArticle,
    indexofLastArticle
  );
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
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
        setError("Something went wrong. Try Again");
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
    setCurrentPage(1);

    try {
      const res = await getPodcasts(category);

      setAllPodcasts(res);
    } catch (error) {
      setError("Something went wrong. Try Again");
    }
  };
  return (
    <div className="flex flex-col gap-[4rem]">
      <Welcome
        title="Listen to a Podcast"
        text="Some podcasts for you to read"
      />

      <div className="flex flex-col gap-[2rem] p-[1rem] ">
        <div className="flex gap-[1rem] justify-center flex-wrap  items-center">
          <div
            className=" font-[400] border border-brown-color p-[1rem] rounded-[1rem] w-[45%] max-lg:w-full m-auto text-center hover:bg-[#f6f6f6] cursor-pointer transition-all duration-500"
            onClick={() => setIsCategoryToggle(!isCategoryToggle)}
          >
            {!isCategoryToggle ? "Show Categories" : "Hide Categories"}
          </div>
          <div
            className={`flex gap-[1rem] justify-center flex-wrap max-lg:${
              isCategoryToggle
                ? " flex w-[100%] flex-wrap"
                : " absolute right-[100000px] w-[10%]"
            } transition-all duration-500`}
          >
            <div
              className={`cursor-pointer border  hover:border-brown-color p-[0.5rem] transition-all duration-500   bg-alt-color rounded-[1rem]  text-center max-w-[150px] ${
                currentCategory == "All" && "border border-1 border-brown-color"
              }`}
              onClick={() => handleCategoryClick("All")}
            >
              <h1 className="font-[400]">All Podcasts</h1>
            </div>
            {categories &&
              categories.map((item, index) => (
                <div
                  className={`cursor-pointer border hover:border-brown-color p-[0.5rem] transition-all duration-500 bg-alt-color border-alt-color border-1 rounded-[1rem]  text-center  min-w-[150px] ${
                    item == currentCategory && "border-brown-color"
                  }`}
                  onClick={() => handleCategoryClick(item)}
                  key={`${item}-${index}`}
                >
                  <h1 className="font-[400]">{item}</h1>
                </div>
              ))}
          </div>
        </div>
        {/* Search */}
        <div className="flex flex-col gap-[1rem]">
          <div className="relative flex  justify-center gap-[1rem] items-center">
            <input
              value={searchText}
              className="search_input container "
              placeholder="Search Podcasts"
              onChange={handleSearchPodcast}
            />
            <div className="max-lg:absolute hidden max-lg:flex right-3 top-3 cursor-pointer bg-slate-200 rounded-[50%] p-[0.5rem]">
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
        {/* Podcast Item */}
        <div className="flex gap-[2rem] flex-wrap max-lg:flex-col justify-center items-center w-full">
          {searchText ? (
            searchedPodcast.length > 0 ? (
              <PodcastCardList data={searchedPodcast} />
            ) : (
              <div className="text-center">Not Found</div>
            )
          ) : currentPodcast.length > 0 ? (
            <PodcastCardList data={currentPodcast} />
          ) : (
            <Loading />
          )}
        </div>
        <Paginate
          totalArticles={allpodcasts.length}
          paginate={paginate}
          articlesPerPage={PODCAST_PER_PAGE}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};
export const PodcastCardList = ({ data }) => {
  return data.map(
    (
      { _id, title, createdAt, description, tag, audio, imageUrl, category },
      index
    ) => (
      <PodcastCard
        key={_id}
        title={title}
        createdAt={createdAt}
        description={description}
        tag={tag}
        audio={audio}
        imageUrl={imageUrl}
        category={category}
        _id={_id}
      />
    )
  );
};
export const PodcastCard = ({
  _id,
  title,
  createdAt,
  description,
  audio,
  imageUrl,
  category,
}) => {
  const router = useRouter();

  const format = (type, createdAt) => {
    if (type == "date") {
      return moment(createdAt).format("MMMM d");
    } else {
      return moment(createdAt).format("dddd");
    }
  };

  return (
    <div
      className="container  flex-col gap-[4rem] cursor-pointer"
      onClick={() => router.push(`/podcasts/${_id}`)}
    >
      <div className="flex-between flex-wrap gap-[0.75rem]">
        <div className="flex flex-col gap-[.75rem]">
          <h2 className="text-[1.5rem]">{title}</h2>
          <p className="text-[13px] font-[400]">{description.slice(0, 80)}</p>
        </div>

        <div className="flex flex-col text-[11px] bg-slate-200 p-[0.8rem] rounded-[1rem] font-[300]">
          {category}
        </div>
      </div>
      <div className="flex flex-col ">
        <img
          src={imageUrl}
          className="w-full h-[250px] object-cover rounded-[1rem] "
          alt="article-img"
        />
      </div>
      <div className="flex justify-between items-center gap-[1rem] rounded-[1rem] cursor-pointer">
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
      <div className="flex-between text-[11px] text-slate-500">
        <div>{format("time", createdAt)}</div>
        <div>{format("date", createdAt)}</div>
      </div>
    </div>
  );
};
export default Podcasts;
