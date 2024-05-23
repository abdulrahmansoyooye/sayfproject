"use client";
import { useState } from "react";
import { motion } from "framer-motion";
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
  const length = carouselItem.length;

  setTimeout(() => {
    setPage(page === length - 1 ? 0 : page + 1);
  }, 4000);

  const applyGradient = (text) => {
    const words = text.split(" ");
    return words.map((word, index) => {
      if (
        word.toLowerCase().includes("productivity") ||
        word.toLowerCase().includes("muslims") ||
        word.toLowerCase().includes("obsatcles") ||
        word.toLowerCase().includes("overcome") ||
        word.toLowerCase().includes("battles") ||
        word.toLowerCase().includes("defeat") ||
        word.toLowerCase().includes("sayf")
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
  const variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="relative flex flex-col gap-[9rem] justify-center section mt-[7rem]">
      <div className="flex gap-[1rem] justify-center">
        {carouselItem.map(
          ({ title, content, buttonText }, index) =>
            index === page && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-[5rem] carousel-item justify-center  text-center"
                key={`${index}-${title}`}
              >
                <div className="flex flex-col gap-[1rem]">
                  <div className="text-[3rem] max-lg:text-[2rem]">
                    <span>{applyGradient(title)}</span>
                  </div>
                  <motion.p className="font-[400] dark-text">
                    {content}
                  </motion.p>
                </div>

                <div className="black_btn sm:max-w-[50%] m-auto w-full">
                  {buttonText}
                </div>
              </motion.div>
            )
        )}
      </div>

      <div className="flex gap-[2rem] m-auto">
        {carouselItem.map(({ title }, index) => (
          <div
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
