"use client";
import { getEachArticle } from "@/utils/actions/articleActions";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const EachArticle = () => {
  const { articleId } = useParams();
  const [error, setError] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    async function fetchArticles() {
      try {
        const res = await getEachArticle(articleId);
        setTitle(res.title);
        setContent(res.content);
      } catch (error) {
        setError("Something went wrong. Try Again");
      }
    }
    fetchArticles();
  }, []);

  return (
    <div className="flex max-lg:flex-col gap-[2rem] mt-[10rem] p-[3rem_2rem] max-lg:p-[4rem_1rem] border serif  bg-[#f6f6f6]">
      <div className="flex flex-col gap-[2rem] w-[70%] max-lg:w-full">
        {error && (
          <p className="text-[2rem] text-center text-red-500">{error}</p>
        )}
        <div>
          <a href="/articles">
            <button className="black_btn w-[40%] max-lg:w-full flex gap-[1rem]">
              <Image src={"/assets/back.png"} width={15} height={30} alt />
              Go Back
            </button>
          </a>{" "}
        </div>
        <div className="flex flex-col gap-[2rem] bg-white w-full p-[1rem] rounded-md ">
          <div className="text-[2rem] text-center">{title}</div>
          <img
            src={"/assets/article3.jpg"}
            className="max-lg:w-full w-full h-[400px] object-cover rounded-md "
            alt="article-img"
          />
          <div
            dangerouslySetInnerHTML={{ __html: content }}
            className="font-[300]"
          />
        </div>
      </div>
      {/*  */}
      <div>
        <div className="text-[1.2rem] font-[500] bg-white p-[1rem] mt-[4rem] rounded-md w-full">
          See Related Articles
        </div>
      </div>
    </div>
  );
};

export default EachArticle;
