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
  const [loading, setLoading] = useState(false);
  const [articleData, setArticleData] = useState({});
  const [relatedArticleData, setrelatedArticleData] = useState([]);
  const { _id, title, content, imageUrl, category, tag } = articleData;
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

          <div className="text-[1.7rem] text-center">{title}</div>
          <div className="text-[0.9rem] w-full m-auto font-[300] text-center">
            {tag && tag}
          </div>
          <img
            src={imageUrl}
            className="max-lg:w-full w-full h-[450px] object-cover max-lg:object-scale-down rounded-md "
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
      <div className=" flex flex-col max-lg:w-full w-[30%] gap-[1rem]">
        <div className="text-[1.2rem] font-[500]  bg-white p-[1rem] rounded-md w-full">
          More Articles
        </div>

        {relatedArticleData ? (
          <div className="flex flex-col gap-[1rem]">
            {relatedArticleData.map(({ _id, title, imageUrl }) => (
              <div
                className="flex bg-white p-[1rem] rounded-md gap-[1rem] cursor-pointer"
                key={_id}
                onClick={() => router.push(`/articles/${_id}`)}
              >
                <div>
                  <div> {title}</div>
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
          <div>Not Found</div>
        )}
      </div>
    </div>
  );
};

export default EachArticle;
