"use client";
import {
  getEachArticle,
  getRelatedsayfArticle,
} from "@/utils/actions/articleActions";
import parse from "html-react-parser";
import moment from "moment";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const EachArticle = () => {
  const { articleId } = useParams();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [articleData, setArticleData] = useState({});
  const [relatedArticleData, setrelatedArticleData] = useState([]);
  const { _id, title, content, imageUrl, category, tag, createdAt } =
    articleData;
  const format = (type, createdAt) => {
    if (type == "date") {
      return moment(createdAt).format("hh:mm A");
    } else {
      return moment(createdAt).format("dddd");
    }
  };
  const router = useRouter();
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
        const res = await getRelatedsayfArticle(category, _id);
        setrelatedArticleData(res);
      } catch (error) {
        setError("Something went wrong. Try Again");
      }
    }
    fetchRelatedArticles();
  }, [category]);
  return (
    <div className="flex max-lg:flex-col gap-[2rem] mt-[5rem] p-[4rem_2rem] max-lg:p-[4rem_1rem] serif border bg-[#f6f6f6] items-start">
      <div className="flex flex-col gap-[2rem] w-[70%] max-lg:w-full">
        {error && (
          <p className="text-[2rem] text-center text-red-500">{error}</p>
        )}

        <div className="flex flex-col gap-[2rem] bg-white w-full p-[1rem] rounded-md ">
          <div className="text-[0.9rem] bg-brown-color text-white rounded-md w-[30%] max-lg:w-full m-auto font-[300] text-center">
            {category}
          </div>

          <div className="text-[1.7rem] text-center ">
            {title && title.replace()}
          </div>
          <div className="text-[0.9rem] w-full m-auto font-[300] text-center">
            {tag && tag}
          </div>
          <img
            src={imageUrl}
            className="max-lg:w-full w-full h-[450px] object-cover max-lg:object-scale-down rounded-md "
            alt="article-img"
          />
          <div className="flex-between text-[11px] text-slate-500">
            <div>{format("time", createdAt)}</div>
            <div>{format("date", createdAt)}</div>
          </div>

          <div className="text-[1rem]">{content && parse(content)}</div>
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
      <div className=" flex flex-col max-lg:w-full w-[30%] gap-[1rem]">
        <div className="text-[1.2rem] font-[500]  bg-white p-[1rem] rounded-md w-full">
          More Articles
        </div>

        {relatedArticleData.length > 0 ? (
          <div className="flex flex-col gap-[1rem]">
            {relatedArticleData.map(({ _id, title, imageUrl }) => (
              <div
                className="flex bg-white p-[1rem] rounded-md gap-[1rem] cursor-pointer"
                key={_id}
                onClick={() => router.push(`/articles/${_id}`)}
              >
                <div>
                  <div>{title}</div>
                </div>
                <img
                  src={imageUrl}
                  className=" w-full h-[150px] object-cover rounded-md "
                  alt="article-img"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center bg-white p-[1rem] rounded-md cursor-pointer">
            No related Article
          </div>
        )}
      </div>
    </div>
  );
};

export default EachArticle;
