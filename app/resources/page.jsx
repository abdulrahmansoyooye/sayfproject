"use client";
import Welcome from "@/components/Welcome";
import Image from "next/image";
import { Link, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Loading from "../loading";
import moment from "moment";
import { getResources } from "@/utils/actions/resourcesActions";

const Resources = () => {
  const [allResources, setAllResources] = useState([]);

  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchResources() {
      try {
        const res = await getResources();
        setAllResources(res);
        console.log(res);
      } catch (error) {
        setError("Something went wrong. Try Again");
      }
    }

    fetchResources();
  }, []);

  return (
    <div className="flex flex-col gap-[4rem]">
      <Welcome title="Free Resources" text="Some Resources for you to read" />

      <div className="flex flex-col gap-[2rem] p-[1rem] ">
        {/* Search */}

        {/* Podcast Item */}
        <div className="flex gap-[2rem] flex-wrap max-lg:flex-col justify-center items-center w-full p-[1.3rem]">
          {allResources.length > 0 ? (
            <ResourcesCardList data={allResources} />
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </div>
  );
};
export const ResourcesCardList = ({ data }) => {
  return data.map(({ _id, title, tag, pdf, createdAt, }, index) => (
    <ResourcesCard
      key={_id}
      title={title}
      createdAt={createdAt}
      pdf={pdf}
      tag={tag}
      _id={_id}
    />
  ));
};
export const ResourcesCard = ({ _id, title, createdAt, pdf, tag }) => {
  const format = (type, createdAt) => {
    if (type == "date") {
      return moment(createdAt).format("MMMM d");
    } else {
      return moment(createdAt).format("dddd");
    }
  };

  return (
    <div className="container  flex-col gap-[4rem] cursor-pointer ">
      <div className="flex-between flex-wrap gap-[0.75rem]">
        <div className="flex flex-col gap-[.75rem]">
          <h2 className="text-[1.5rem]">{title}</h2>
        </div>

        <div className="flex flex-col text-[11px] bg-slate-200 p-[0.8rem] rounded-md font-[300]">
          #{tag}
        </div>
      </div>
      <div className="flex flex-col ">
        <img
          src={"/assets/pdf.png"}
          className="w-full h-[250px] object-cover rounded-md "
          alt="article-img"
        />
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
      <div className="flex-between text-[11px] text-slate-500">
        <div>{format("time", createdAt)}</div>
        <div>{format("date", createdAt)}</div>
      </div>
    </div>
  );
};
export default Resources;
