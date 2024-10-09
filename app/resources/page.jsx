"use client";
import Welcome from "@/components/Welcome";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Loading from "../loading";
import moment from "moment";
import { getResources } from "@/utils/actions/resourcesActions";
import Image from "next/image";

const Resources = () => {
  const [allResources, setAllResources] = useState([]);
  const [error, setError] = useState("");
  const [searchText, setSearchText] = useState("");
  const [searchedResources, setSearchedResources] = useState([]);
  const handleSearchResources = (e) => {
    setSearchText(e.target.value);

    const inputValue = e.target.value.toLowerCase();

    const filteredPodcast = allResources.filter(
      ({ title, description, tag }) =>
        title.toLowerCase().includes(inputValue) ||
        tag.toLowerCase().includes(inputValue)
    );
    setSearchedResources(filteredPodcast);
  };
  useEffect(() => {
    async function fetchResources() {
      try {
        const res = await getResources();
        setAllResources(res);
      } catch (error) {
        setError("Something went wrong. Try Again");
      }
    }

    fetchResources();
  }, []);

  return (
    <div className="flex flex-col gap-[4rem]">
      <Welcome
        title="Free Resources"
        text="Free resources to aid your journey to becoming a better version of yourself"
      />

      <div className="flex flex-col gap-[2rem] p-[1rem] ">
        {/* Search */}
        <div className="flex flex-col gap-[1rem]">
          <div className="relative flex  justify-center gap-[1rem] items-center">
            <input
              value={searchText}
              className="search_input container"
              placeholder="Search Resources"
              onChange={handleSearchResources}
            />
            <div className="max-lg:absolute hidden max-lg:flex right-3 top-3 cursor-pointer bg-slate-200 rounded-[50%] p-[0.5rem]">
              {" "}
              <Image
                src={"/assets/search.png"}
                width={20}
                height={20}
                alt="search"
              />
            </div>
          </div>
        </div>
        {/* Podcast Item */}
        <div className="flex gap-[2rem] flex-wrap max-lg:flex-col justify-center items-center w-full p-[1.3rem]">
          {searchText ? (
            searchedResources.length > 0 ? (
              <ResourcesCardList data={searchedResources} />
            ) : (
              <div className="text-center">Not Found</div>
            )
          ) : allResources.length > 0 ? (
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
  return data.map(({ _id, title, tag, pdf, createdAt }, index) => (
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
  const router = useRouter();
  const format = (type, createdAt) => {
    if (type == "date") {
      return moment(createdAt).format("MMMM d");
    } else {
      return moment(createdAt).format("dddd");
    }
  };

  return (
    <div
      className="container  flex-col gap-[4rem] cursor-pointer "
      onClick={() => router.push(`/resources/${_id}`)}
    >
      <div className="flex-between flex-wrap gap-[0.75rem]">
        <div className="flex flex-col gap-[.75rem]">
          <h2 className="text-[1.5rem]">{title}</h2>
        </div>

        <div className="flex flex-col text-[11px] bg-slate-200 p-[0.8rem] rounded-lg font-[300]">
          #{tag}
        </div>
      </div>
      <div className="flex flex-col ">
        <img
          src={"/assets/pdf.png"}
          className="w-full h-[250px] object-cover rounded-lg "
          alt="article-img"
        />
      </div>
      <div className="black_btn">Learn more</div>
      <div className="flex-between text-[11px] text-slate-500">
        <div>{format("time", createdAt)}</div>
        <div>{format("date", createdAt)}</div>
      </div>
    </div>
  );
};
export default Resources;
