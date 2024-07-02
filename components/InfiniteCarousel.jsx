"use client";
import React, { useState } from "react";
import InfiniteMovingCards from "./ui/infinite-moving-cards";
import Image from "next/image";

const InfiniteCarousel = () => {
  const [cardIndex, setCardIndex] = useState(0);

  const handleNext = () => {
    setCardIndex((prevIndex) => (prevIndex > 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCardIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 2));
  };

  return (
    <div className="flex flex-col gap-[2rem] overflow-hidden">
      <InfiniteMovingCards cardIndex={cardIndex} />

      <div className="flex justify-evenly">
        <div
          onClick={handlePrev}
          className="bg-primary-color rounded-[50%] p-[1rem] hover:bg-slate-100 cursor-pointer"
        >
          <Image
            src={"/assets/foward.svg"}
            width={20}
            height={20}
            alt="foward-image"
          />
        </div>
        <div
          onClick={handleNext}
          className="bg-primary-color rounded-[50%] p-[1rem] hover:bg-slate-100 cursor-pointer"
        >
          <Image
            src={"/assets/backward.svg"}
            width={20}
            height={20}
            alt="backward-image"
          />
        </div>
      </div>
    </div>
  );
};

export default InfiniteCarousel;
