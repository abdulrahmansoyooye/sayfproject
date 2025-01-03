"use client";
import Welcome from "@/components/Welcome";
import Image from "next/image";
import {formatMonth, formatDay} from "@/constants/index"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getCourses } from "@/utils/actions/courseActions";
import Loading from "../loading";
import moment from "moment";

const Courses = () => {
  const [allcourses, setAllCourses] = useState([]);

  // Search
  const [searchText, setSearchText] = useState("");
  const [searchedCourse, setSearchedCourses] = useState([]);
  const handleSearchCourse = (e) => {
    setSearchText(e.target.value);

    const inputValue = e.target.value.toLowerCase();

    const filteredCourse = allcourses.filter(
      ({ title, description, tag }) =>
        title.toLowerCase().includes(inputValue) ||
        description.toLowerCase().includes(inputValue) ||
        tag.toLowerCase().includes(inputValue)
    );

    setSearchedCourses(filteredCourse);
  };

  useEffect(() => {
    async function fetchCourses() {
      try {
        const res = await getCourses();

        setAllCourses(res.reverse());
      } catch (error) {
        setError("Something went wrong. Try AgainCourses");
      }
    }
    fetchCourses();
  }, []);

  return (
    <div className="flex flex-col gap-[4rem]">
      <Welcome
        title="Availabe Courses"
        text="Courses on productivity, personal growth, relationships, spirituality & mental health"
      />

      <div className="flex gap-[2rem] flex-col p-[1rem]">
        <div className="relative flex  justify-center gap-[1rem] items-center">
          <input
            value={searchText}
            className="search_input container "
            placeholder="Search For Courses"
            onChange={handleSearchCourse}
          />
          <div className="max-lg:absolute right-3 top-3 cursor-pointer bg-slate-200 rounded-[50%] p-[0.5rem]">
            {" "}
            <Image
              src={"/assets/search.png"}
              width={20}
              height={20}
              alt="search"
            />
          </div>
        </div>
        <div className="flex gap-[2rem] flex-wrap max-lg:flex-col justify-center items-center w-full px-[1rem]">
          {searchText ? (
            searchedCourse.length > 0 ? (
              <CourseCardList data={searchedCourse} />
            ) : (
              <div className="text-center">Not Found</div>
            )
          ) : allcourses.length > 0 ? (
            <CourseCardList data={allcourses} />
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </div>
  );
};
export const CourseCardList = ({ data }) => {
  return data.map(
    (
      { _id, title, createdAt, description, tag, audioUrl, imageUrl },
      index
    ) => (
      <CourseCard
        key={_id}
        _id={_id}
        title={title}
        createdAt={createdAt}
        description={description}
        tag={tag}
        audioUrl={audioUrl}
        imageUrl={imageUrl}
      />
    )
  );
};
export const CourseCard = ({
  _id,
  title,
  createdAt,
  description,
  tag,
  audioUrl,
  imageUrl,
}) => {
  const router = useRouter();

  
  return (
    <div
      className="container flex-col gap-[4rem] cursor-pointer"
      onClick={() => router.push(`/courses/${_id}`)}
    >
      <div className="flex-between flex-wrap gap-[1rem]">
        <div className="flex flex-col gap-[0.75rem]">
          <h2 className="text-[1.5rem]">{title}</h2>
         
        </div>

        <div className="flex flex-col text-[11px] bg-slate-200 p-[0.8rem] rounded-lg font-[300]">
          #{tag}
        </div>
      </div>
      <div className="flex flex-col ">
        <img
          src={imageUrl}
          className="w-full h-[400px] object-cover rounded-lg"
          alt="article-img"
        />
      </div>
      <div className="">
        <button className="black_btn w-full">Go to Course</button>
      </div>
      <div className="flex-between text-[11px] text-slate-500">
        <div>{formatMonth(createdAt)}</div>
        <div>{formatDay(createdAt)}</div>
      </div>
    </div>
  );
};
export default Courses;
