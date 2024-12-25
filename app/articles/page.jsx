"use client";
import ArticlesCard from "@/components/ArticlesCard";
import Welcome from "@/components/Welcome";

import { useEffect, useState } from "react";
import Loading from "../loading";
import { getCategory, getsayfArticle } from "@/utils/actions/articleActions";
import Image from "next/image";
import Paginate from "@/components/Paginate";
const ARTICLES_PER_PAGE = 10;
const Articles = () => {
  const [categories, setCategories] = useState([]);
  const [articles, setArticles] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("All");
  const [error, setError] = useState("");
  const [isCategoryToggle, setIsCategoryToggle] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const indexofLastArticle = currentPage * ARTICLES_PER_PAGE;
  const indexofFirstArticle = indexofLastArticle - ARTICLES_PER_PAGE;
  const currentArticle = articles.slice(
    indexofFirstArticle,
    indexofLastArticle
  );
  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top on page change
  };

  // Search
  const [searchText, setSearchText] = useState("");
  const [searchedArticles, setsearchedArticles] = useState([]);
  const handleSearchArticle = (e) => {
    setSearchText(e.target.value);

    const inputValue = e.target.value.toLowerCase();

    const filteredArticles = currentArticle.filter(
      ({ title, tag }) =>
        title.toLowerCase().includes(inputValue) ||
        (tag && tag.toLowerCase().includes(inputValue))
    );
    setsearchedArticles(filteredArticles);
  };

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
    setCurrentPage(1);
    try {
      const res = await getsayfArticle(name);
      setArticles(res);
    } catch (error) {
      setError("Something went wrong. Try Again");
    }
  };
  return (
    <div className="flex flex-col rubik">
      <Welcome
        title="Articles"
        text="Articles on productivity, time-management, personal growth relationships, spirituality & mental health"
      />
      {error && <Error />}

      <div className="flex flex-col gap-[2rem] sm:w-[80%] m-[2rem_auto] p-[2rem] ">
        <div
          className=" font-[400] border border-brown-color p-[1rem] rounded-lg w-[45%]  max-lg:w-full m-auto text-center hover:bg-[#f6f6f6] cursor-pointer transition-all duration-500"
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
            className={`cursor-pointer border  hover:border-brown-color p-[0.5rem] transition-all duration-500   bg-alt-color rounded-lg text-center  ${
              currentCategory == "All" && "border border-1 border-brown-color"
            }`}
            onClick={() => handleCategoryClick("All")}
          >
            <h1 className="font-[400]">All articles</h1>
          </div>
          {categories &&
            categories.map((item, index) => (
              <div
                className={`cursor-pointer border hover:border-brown-color p-[0.5rem_1rem] transition-all duration-500 bg-alt-color border-alt-color border-1 rounded-lg
                 ${item == currentCategory && "border-brown-color"} 
                }`}
                onClick={() => handleCategoryClick(item)}
                key={`${item}-${index}`}
              >
                <h1 className="font-[400]">{item}</h1>
              </div>
            ))}
        </div>
        <div className="flex flex-col gap-[1rem]">
          <div className="relative flex  justify-center gap-[1rem] items-center">
            <input
              value={searchText}
              className="search_input container "
              placeholder="Search Articles"
              onChange={handleSearchArticle}
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
        <div className="flex gap-[2rem] justify-center flex-wrap  w-full">
          {searchText ? (
            searchedArticles.length > 0 ? (
              <ArticlesData articles={searchedArticles} />
            ) : (
              <div className="text-center">Not Found</div>
            )
          ) : currentArticle.length > 0 ? (
            <ArticlesData articles={currentArticle} />
          ) : (
            <Loading />
          )}
        </div>
        <Paginate
          totalitems={articles.length}
          paginate={handlePagination}
          itemsPerPage={ARTICLES_PER_PAGE}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default Articles;

const ArticlesData = ({ articles }) => {
  return articles.map(
    ({ _id, title, content, imageUrl, createdAt, tag, category }, index) => (
      <ArticlesCard
        _id={_id}
        tag={tag}
        imageUrl={imageUrl}
        title={title}
        content={content}
        key={_id}
        createdAt={createdAt}
        category={category}
        index={index}
      />
    )
  );
};
