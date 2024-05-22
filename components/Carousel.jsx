"use client";
import { useState } from "react";
import Underline from "./Underline";
const carouselItem = [
  {
    title: `Sayf; For Productive Muslims`,

    content:
      "Join a movement of 20k+ Muslims committed to maximizing their time,reaching their goals, and living joyfully.",
    buttonText: " Learn more",
  },
  {
    title: "Productivity and Purpose",
    content:
      "Inspiring Muslims to make the most of every moment and lead a life of purpose and fulfilment.",
    buttonText: "Learn more",
  },
  {
    title: "Defeat Your Biggest Obsatcles",
    content:
      " Providing the strategies you need to excel in eve as aspect of our life.",
    buttonText: "Learn more",
  },
  {
    title: "Overcome Your Inner Battles",
    content:
      "Tools and strategies for enhanced personal, professional, and spiritual",
    buttonText: "Learn more",
  },
];
const Carousel = () => {
  const [page, setPage] = useState(0);
  const applyGradient = (text) => {
    const words = text.split(" ");
    return words.map((word, index) => {
      if (
        word.toLowerCase().includes("productive") ||
        word.toLowerCase().includes("muslims") ||
        word.toLowerCase().includes("productivity") ||
        word.toLowerCase().includes("obstacles") ||
        word.toLowerCase().includes("inner") ||
        word.toLowerCase().includes("battles")
      ) {
        return (
          <span key={index} className={"text-gradient-blue"}>
            {word}{" "}
          </span>
        );
      }
      return word + " ";
    });
  };
  return (
    <div className="relative flex flex-col gap-[9rem] items-stretch section">
      <div className="flex gap-[1rem]">
        {carouselItem.map(
          ({ title, content, buttonText }, index) =>
            index === page && (
              <div
                className="flex flex-col gap-[1rem] carousel-item"
                key={`${index}-${title}`}
              >
                <div className="text-[3rem] max-md:text-[2rem]">
                  <span>{title}</span>
                </div>
                <p className="font-[400] dark-text">{content}</p>
                <div className="black_btn sm:max-w-[250px] w-full">
                  {buttonText}
                </div>
              </div>
            )
        )}
      </div>

      <div className="flex gap-[2rem] m-auto">
        {carouselItem.map(({ title }, index) => (
          <div
            onClick={() => setPage(index)}
            className={`${
              index === page ? "active-carousel " : " text-underline "
            }`}
            key={`${index}-${title}`}
          >
            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
