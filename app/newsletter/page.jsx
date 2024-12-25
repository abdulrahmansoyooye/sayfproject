"use client";

import Welcome from "@/components/Welcome";
import { getNewsletter } from "@/utils/actions/newsletterActions";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Loading from "../loading.js";
import { LoadingHorizontal } from "../loading.js";
import Paginate from "../../components/Paginate.jsx";
import {formatMonth, formatDay} from "@/constants/index"
import CardSkeleton from "@/components/CardSkeleton"

const NewsLetter = () => {
  const newsletters_PER_PAGE = 10;
  const [newsletter, setNewsletter] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const indexofLastArticle = currentPage * newsletters_PER_PAGE;
  const indexofFirstArticle = indexofLastArticle - newsletters_PER_PAGE;
  const currentNewsletters = newsletter.slice(
    indexofFirstArticle,
    indexofLastArticle
  );
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  useEffect(() => {
    async function fetchNewsletter() {
      try {
        const res = await getNewsletter();

        setNewsletter(res.reverse());
      } catch (error) {
        setError("Something went wrong. Try Again");
      }
    }
    fetchNewsletter();
  }, []);
 
  return (
    <div>
      <Welcome title={"Sayf Weekly Newsletter"} />
      <div className="flex flex-col  gap-[6rem] p-[4rem_2rem] justify-around">
        <iframe
          src="https://sayfnetwork.substack.com/embed"
          frameborder="1"
          className="border m-auto w-[60%] max-md:w-full h-[320px] rounded-lg"
        ></iframe>
        <div className="flex gap-[2rem] justify-between flex-wrap items-center">
          {newsletter.length > 0 ? (
            currentNewsletters.map(({ _id, title, publishDate, link }) => (
              <div
                key={_id}
                className="border-b sm:w-[45%] w-full  justify-center p-[1rem] rounded-lgll"
              >
                <div className="flex gap-[0.5rem] text-[0.8rem] text-slate-600">
                  <div>{formatMonth(publishDate)}</div>
                  <div>{formatDay(publishDate)}</div>
                </div>
                <div className="text-[1.5rem]">
                  <Link href={link} className="text-black  text-[1.2rem] serif">
                    {title}
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div >
              {" "}
              <CardSkeleton />
            </div>
          )}
        </div>
        <Paginate
          totalitems={newsletter.length}
          paginate={paginate}
          itemsPerPage={newsletters_PER_PAGE}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default NewsLetter;
