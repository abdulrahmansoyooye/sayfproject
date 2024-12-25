"use client";
import { getEachCourse } from "@/utils/actions/courseActions";
import { getEachResources } from "@/utils/actions/resourcesActions";
import Error from "next/error";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { LoadingHorizontal } from "../../loading";
import LoadingSkeleton from "@/components/LoadingSkeleton"
import CardSkeleton from "@/components/CardSkeleton"
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
        setDescription(res.description);
      } catch (error) {
        setError("Something went wrong. Try Again");
      }
    }
    fetchcourses();
  }, []);

  return (
    <div className="flex flex-col gap-[4rem] mt-[3rem] p-[5rem_2rem] max-lg:p-[4rem_1rem] border rubik bg-[#f6f6f6]">
      {error && <Error />}
      {!title ? (
          <LoadingSkeleton />
        ) : (
      <div className="flex max-lg:flex-col gap-[2rem] bg-white w-full p-[2rem] rounded-lg ">
        <object width="100%" height="400" data={pdf} type="application/pdf" className="overflow-hidden rounded-md">
          {" "}
        </object>

        <div className="flex flex-col gap-[4rem] justify-between w-full flex-wrap">
          <div className="flex justify-between  gap-[0.5rem] flex-wrap">
            <div className="text-[2rem] font-[500] dark-text ">{title}</div>
            <div className="bg-slate-100 p-[0.5rem]  rounded-lg text-[0.75rem] flex-0 font-[300]">
              #{tag}
            </div>
          </div>
          <div className=" p-[0.5rem]  rounded-lg text-[0.9rem] flex-0 font-[300]">
            {!description
              ? "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt quo fuga maiores corrupti. Soluta molestias debitis mollitia molestiae saepe, omnis quidem necessitatibus rerum voluptates exercitationem numquam praesentium! Suscipit, repellendus consectetur. Aspernatur cupiditate accusamus quod repellat molestiae obcaecati perspiciatis ut maiores iste"
              : description}
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
      </div>)}
    </div>
  );
};

export default page;
