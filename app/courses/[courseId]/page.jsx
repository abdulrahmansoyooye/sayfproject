"use client";
import { getEachCourse } from "@/utils/actions/courseActions";
import Error from "next/error";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const { courseId } = useParams();
  const [error, setError] = useState("");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("");
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
      } catch (error) {
        setError("Failed to fetch courses");
      }
    }
    fetchcourses();
  }, []);

  return (
    <div className="flex flex-col gap-[4rem] mt-[6rem] p-[3rem_2rem] max-lg:p-[4rem_1rem] border serif h-[100vh]  bg-[#f6f6f6]">
      {error && <Error />}

      <div className="flex max-lg:flex-col gap-[2rem] bg-white w-full p-[2rem] rounded-md ">
        <img
          src={"/assets/article3.jpg"}
          className="max-lg:w-full w-[60%] h-[250px] object-cover rounded-md "
          alt="article-img"
        />

        <div className="flex flex-col gap-[4rem] justify-between w-full">
          <div className="flex justify-between  gap-[0.5rem] flex-wrap">
            <div className="text-[2rem] font-[500] dark-text ">{title}</div>
            <div className="bg-slate-100 p-[0.5rem] text-slate-700 rounded-md text-[0.75rem] flex-0 max-w-[30%] font-[300]">
              #{tag}
            </div>
          </div>
          <div className="text-slate-700 ">{description}</div>

          <div className="flex flex-col gap-[1rem] justify-between">
            <button className="black_btn sm:w-[50%] flex gap-[1rem]">
              {" "}
              <Image src={"/assets/cart.png"} width={30} height={30} alt />{" "}
              <a href={link} target="_blank">
                {" "}
                Get Course
              </a>
            </button>
          </div>
        </div>
      </div>
      {/*  */}
      {/* <div>
        <div className="text-[1.2rem] font-[500] bg-white p-[1rem] rounded-md">
          See Related courses
        </div>
      </div> */}
    </div>
  );
};

export default page;
