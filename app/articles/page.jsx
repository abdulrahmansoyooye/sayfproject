"use client";
import ArticlesCard from "@/components/ArticlesCard";
import Welcome from "@/components/Welcome";
import { getArticles, getCategory } from "@/utils/actions/articleActions";

import { useEffect, useState } from "react";
import Loading from "../loading";

const Articles = () => {
  const [categories, setCategories] = useState([]);
  const [articles, setArticles] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("All");
  const [error, setError] = useState("");
  const [categoryId, setcategoryId] = useState("");
  const [isCategoryToggle, setIsCategoryToggle] = useState(false);
  useEffect(() => {
    async function fetchArticles() {
      try {
        const res = await getArticles("All");
        setArticles(res.reverse());
      } catch (error) {
        setError("Failed to fetch articles");
      }
    }
    async function fetchCatrogries() {
      try {
        const res = await getCategory();
        setCategories(res);
      } catch (error) {
        setError("Failed to fetch articles");
      }
    }
    fetchCatrogries();
    fetchArticles();
  }, []);

  const handleCategoryClick = async (name, _id) => {
    setCurrentCategory(name);
    setcategoryId(_id);
    setArticles([]);
    try {
      const res = await getArticles(name);

      setArticles(res.reverse());
    } catch (error) {
      setError("Failed to fetch articles");
    }
  };
  return (
    <div className="flex flex-col rubik">
      <Welcome title="Read an Article" text="Some articles for you to read" />
      {error && <Error />}

      <div className="flex flex-col gap-[2rem] sm:w-[80%] m-[2rem_auto] p-[2rem] ">
        <div
          className=" font-[400] border border-brown-color p-[1rem] rounded-md w-[80%]  m-auto text-center hover:bg-[#f6f6f6] cursor-pointer transition-all duration-500"
          onClick={() => setIsCategoryToggle(!isCategoryToggle)}
        >
          {!isCategoryToggle ? " Show All Catrgories" : " Show less"}
        </div>
        <div
          className={`flex gap-[1rem] justify-center flex-wrap max-lg:${
            isCategoryToggle
              ? " flex w-[100%]"
              : " absolute right-[100000px] w-[10%]"
          } transition-all duration-500`}
        >
          <div
            className={`cursor-pointer  hover:border-brown-color p-[0.5rem] transition-all duration-500   bg-alt-color rounded-md  text-center w-[150px] ${
              currentCategory == "All" && "border border-1 border-brown-color"
            }`}
            onClick={() => handleCategoryClick("All")}
          >
            <h1 className="font-[500]">All</h1>
          </div>
          {categories &&
            categories.map(({ _id, name }) => (
              <div
                className={`cursor-pointer border hover:border-brown-color p-[0.5rem] transition-all duration-500 bg-alt-color border-alt-color border-1 rounded-md  text-center  w-[150px] ${
                  name == currentCategory && "border-brown-color"
                }`}
                onClick={() => handleCategoryClick(name, _id)}
                key={_id}
              >
                <h1 className="font-[500]">{name}</h1>
              </div>
            ))}
        </div>

        <div className="flex gap-[2rem] justify-center flex-wrap  w-full">
          {articles && articles.length === 0 && <Loading />}
          {currentCategory === "All" ? (
            <AllCategories articles={articles} categoryId={categoryId} />
          ) : (
            <OtherCategories articles={articles} categoryId={categoryId} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Articles;

const OtherCategories = ({ articles }) => {
  return articles.map(({ _id, title, content }, index) => (
    <ArticlesCard
      _id={_id}
      title={title}
      content={content}
      key={_id}
      index={index}
    />
  ));
};

const AllCategories = ({ articles, categoryId }) => {
  return articles.map(({ _id, title, content }, index) => (
    <ArticlesCard
      _id={_id}
      title={title}
      content={content}
      categoryId={categoryId}
      key={_id}
      index={index}
    />
  ));
};
