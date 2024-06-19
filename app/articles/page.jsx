"use client";
import ArticlesCard from "@/components/ArticlesCard";
import Welcome from "@/components/Welcome";

import { useEffect, useState } from "react";
import Loading from "../loading";
import { getCategory, getsayfArticle } from "@/utils/actions/articleActions";

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
        const res = await getsayfArticle("All");
        setArticles(res);
      } catch (error) {
        setError("Something went wrong. Try Again");
      }
    }
    async function fetchCatrogries() {
      try {
        const res = await getCategory();
        setCategories(res);
      } catch (error) {
        setError("Something went wrong. Try Again");
      }
    }
    fetchCatrogries();
    fetchArticles();
  }, []);

  const handleCategoryClick = async (name, _id) => {
    setCurrentCategory(name);
    setArticles([]);
    try {
      const res = await getsayfArticle(name);

      setArticles(res);
    } catch (error) {
      setError("Something went wrong. Try Again");
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
          {!isCategoryToggle ? " See All" : " Show less"}
        </div>
        <div
          className={`flex gap-[1rem] justify-center flex-wrap max-lg:${
            isCategoryToggle
              ? " flex w-[100%] flex-wrap"
              : " absolute right-[100000px] w-[10%]"
          } transition-all duration-500`}
        >
          <div
            className={`cursor-pointer border  hover:border-brown-color p-[0.5rem] transition-all duration-500   bg-alt-color rounded-md  text-center max-w-[150px] ${
              currentCategory == "All" && "border border-1 border-brown-color"
            }`}
            onClick={() => handleCategoryClick("All")}
          >
            <h1 className="font-[400]">All</h1>
          </div>
          {categories &&
            categories.map((item, index) => (
              <div
                className={`cursor-pointer border hover:border-brown-color p-[0.5rem] transition-all duration-500 bg-alt-color border-alt-color border-1 rounded-md  text-center  min-w-[150px] ${
                  item == currentCategory && "border-brown-color"
                }`}
                onClick={() => handleCategoryClick(item)}
                key={`${item}-${index}`}
              >
                <h1 className="font-[400]">{item}</h1>
              </div>
            ))}
        </div>

        <div className="flex gap-[2rem] justify-center flex-wrap  w-full">
          {articles.length === 0 && <Loading />}
          {currentCategory === "All" ? (
            <AllCategories articles={articles} />
          ) : (
            <OtherCategories articles={articles} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Articles;

const OtherCategories = ({ articles }) => {
  return articles.map(({ _id, title, content, imageUrl }, index) => (
    <ArticlesCard
      title={title}
      imageUrl={imageUrl}
      content={content}
      key={_id}
      index={index}
      _id={_id}
    />
  ));
};

const AllCategories = ({ articles }) => {
  return articles.map(({ _id, title, content, imageUrl }, index) => (
    <ArticlesCard
      _id={_id}
      imageUrl={imageUrl}
      title={title}
      content={content}
      key={_id}
      index={index}
    />
  ));
};
