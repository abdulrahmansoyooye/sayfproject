"use client";

import Welcome from "@/components/Welcome";
import { getNewsletter } from "@/utils/actions/newsletterActions";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const NewsLetter = () => {
  const [newsletter, setNewsletter] = useState([]);
  useEffect(() => {
    async function fetchNewsletter() {
      try {
        const res = await getNewsletter();
        console.log(res);
        setNewsletter(res.reverse());
      } catch (error) {
        setError("Something went wrong. Try AgainCourses");
      }
    }
    fetchNewsletter();
  }, []);
  const format = (type, createdAt) => {
    if (type == "date") {
      return moment(createdAt).format("MMMM");
    } else {
      return moment(createdAt).format("d");
    }
  };
  return (
    <div>
      <Welcome title={"News Letter"} />
      <div className="flex flex-col  gap-[6rem] p-[4rem_2rem] justify-around">
        <iframe
          src="https://sayfnetwork.substack.com/embed"
          frameborder="1"
          className="border m-auto w-[60%] max-md:w-full h-[320px] rounded-lg"
        ></iframe>
        <div className="flex gap-[2rem] justify-between flex-wrap items-center">
          {newsletter.map(({ _id, title, createdAt, link }) => (
            <div
              key={_id}
              className="border-b w-[45%] justify-center p-[1rem] rounded-lgll"
            >
              <div className="flex gap-[0.5rem] text-[0.8rem] text-slate-600">
                <div>{format("date", createdAt)}</div>
                <div>{format("day", createdAt)}</div>
              </div>
              <div className="text-[1.5rem]">
                <Link href={link} className="text-black  text-[1.2rem] serif">
                  {title.slice(0, 50)}...
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
