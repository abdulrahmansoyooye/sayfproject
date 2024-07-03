"use client";
import { getEachCourse } from "@/utils/actions/courseActions";
import { getEachResources } from "@/utils/actions/resourcesActions";
import Error from "next/error";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const { resourcesId } = useParams();
  const [error, setError] = useState("");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("");
  const [pdf, setpdf] = useState("");
  const [link, setLink] = useState("");
  const router = useRouter();

  useEffect(() => {
    async function fetchcourses() {
      try {
        const res = await getEachResources(resourcesId);
        setTitle(res.title);
        setTag(res.tag);
        setpdf(res.pdf);
      } catch (error) {
        setError("Something went wrong. Try Again");
      }
    }
    fetchcourses();
  }, []);

  return (
    <div className="flex flex-col gap-[4rem] mt-[3rem] p-[5rem_2rem] max-lg:p-[4rem_1rem] border rubik bg-[#f6f6f6]">
      {error && <Error />}

      <div className="flex max-lg:flex-col gap-[2rem] bg-white w-full p-[2rem] rounded-[1rem] ">
        <img
          src={"/assets/pdf.png"}
          className="max-lg:w-full w-[60%] h-[250px] object-cover rounded-[1rem] "
          alt="article-img"
        />

        <div className="flex flex-col gap-[4rem] justify-between w-full flex-wrap">
          <div className="flex justify-between  gap-[0.5rem] flex-wrap">
            <div className="text-[2rem] font-[500] dark-text ">{title}</div>
            <div className="bg-slate-100 p-[0.5rem]  rounded-[1rem] text-[0.75rem] flex-0 font-[300]">
              #{tag}
            </div>
          </div>

          <div className="flex justify-center">
            <a
              href={pdf}
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
        </div>
      </div>
      {/*  */}
      {/* <div>
        <div className="text-[1.2rem] font-[500] bg-white p-[1rem] rounded-[1rem]">
          See Related courses
        </div>
      </div> */}
    </div>
  );
};

export default page;
