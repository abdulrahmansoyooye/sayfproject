"use client";
import {
  getEachArticle,
  getRelatedsayfArticle,
} from "@/utils/actions/articleActions";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const EachArticle = () => {
  const { articleId } = useParams();
  const [error, setError] = useState("");

  const [articleData, setArticleData] = useState({});
  const [relatedArticleData, setrelatedArticleData] = useState([]);
  const { title, content, imageUrl, category } = articleData;
  console.log(relatedArticleData);
  useEffect(() => {
    async function fetchArticles() {
      try {
        const res = await getEachArticle(articleId);
        setArticleData(res);
      } catch (error) {
        setError("Something went wrong. Try Again");
      }
    }

    fetchArticles();
  }, []);
  useEffect(() => {
    async function fetchRelatedArticles() {
      try {
        const res = await getRelatedsayfArticle(category);
        setrelatedArticleData(res);
      } catch (error) {
        setError("Something went wrong. Try Again");
      }
    }
    fetchRelatedArticles();
  }, [category]);
  return (
    <div className="flex max-lg:flex-col gap-[2rem] mt-[10rem] p-[3rem_2rem] max-lg:p-[4rem_1rem] border serif  bg-[#f6f6f6] items-start">
      <div className="flex flex-col gap-[2rem] w-[70%] max-lg:w-full">
        {error && (
          <p className="text-[2rem] text-center text-red-500">{error}</p>
        )}

        <div className="flex flex-col gap-[2rem] bg-white w-full p-[1rem] rounded-md ">
          <div className="text-[0.9rem] bg-brown-color text-white rounded-md w-[30%] m-auto font-[300] text-center">
            {category}
          </div>

          <div className="text-[1.7rem] text-center">{title}</div>
          <img
            src={imageUrl}
            className="max-lg:w-full w-full h-[400px] object-fill max-lg:object-scale-down rounded-md "
            alt="article-img"
          />
          <div
            dangerouslySetInnerHTML={{ __html: content }}
            className="font-[300]"
          />
        </div>
        <div>
          <a href="/articles">
            <button className="black_btn w-[40%] max-lg:w-full flex gap-[1rem]">
              <Image src={"/assets/back.png"} width={15} height={30} />
              Go Back
            </button>
          </a>
        </div>
      </div>
      {/*  */}
      <div className="border flex flex-col justify-start">
        <div className="text-[1.2rem] font-[500] bg-white p-[1rem] mt-[4rem] rounded-md w-full">
          See Related Articles
        </div>
        <div>
          {relatedArticleData ? (
            <div>
              {relatedArticleData.map(({ title, imageUrl }) => {
                <div>{title}</div>;
              })}
            </div>
          ) : (
            <div>Not Found</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EachArticle;
