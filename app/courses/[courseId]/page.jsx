"use client";
import { getEachCourse } from "@/utils/actions/courseActions";
import Error from "next/error";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import LoadingSkeleton from "@/components/LoadingSkeleton"
import CardSkeleton from "@/components/CardSkeleton"
import { CiShoppingCart } from "react-icons/ci";
const page = () => {
  const { courseId } = useParams();
  const [error, setError] = useState("");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [link, setLink] = useState("");
  const router = useRouter();

  useEffect(() => {
    async function fetchcourses() {
      try {
        const res = await getEachCourse(courseId);
        setTitle(res.title);
        setDescription(res.description);
        setTag(res.tag);
        setLink(res.link);
        setImageUrl(res.imageUrl);
      } catch (error) {
        setError("Something went wrong. Try Again");
      }
    }
    fetchcourses();
  }, []);

  return (
    <div className="flex flex-col gap-[4rem] mt-[3rem] p-[5rem_2rem] max-lg:p-[4rem_1rem] border serif  bg-[#f6f6f6]">
      {error && <Error />}

     {!title ? (
          <LoadingSkeleton />
        ) : ( <div className="flex max-lg:flex-col gap-[2rem] bg-white w-full p-[2rem] rounded-lg ">
        <img
          src={imageUrl}
          className="max-lg:w-full w-[60%] h-[400px] object-cover rounded-lg "
          alt="article-img"
        />

        <div className="flex flex-col gap-[4rem] justify-between w-full flex-wrap">
          <div className="flex justify-between  gap-[0.5rem] flex-wrap">
            <div className="text-[2rem] font-[500] dark-text ">{title}</div>
            <div className="bg-slate-100 p-[0.5rem]  rounded-lg text-[0.75rem] flex-0 font-[300]">
              #{tag}
            </div>
          </div>
          <div className="">{parse(description)}</div>

          <div className="flex flex-col gap-[1rem] justify-between">
            <button className="black_btn w-full flex gap-[1rem]">
              {" "}
              <Image src={"/assets/cart.png"} width={30} height={30} />{" "}
              <a href={`${link}/`} target="_blank">
                {" "}
                Get Course
              </a>
            </button>
          </div>
        </div>
      </div>) }
      
    </div>
  );
};

export default page;
