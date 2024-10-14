"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
const carouselItem = [
  {
    title: `Life Is Too Complex`,

    content:
      "Learn simple principles that erase your worries about life, career, marriage & productivity",
    buttonText: " Learn more",
  },
  {
    title: "Get back motivation and happiness in life – get rid of burnout",
    content:
      "Simple strategies to overcome addictions, depression, anxiety, procrastination, inconsistency, and low self-esteem.",
    buttonText: "Learn more",
  },
  {
    title: "The Solution Has Always Been There",
    content:
      "Affirmations, meditation & self-talk won't solve your problems! Our deen has little-known, yet more effective alternatives.",
    buttonText: "Learn more",
  },
  {
    title: "Sayf; For Productive Muslims",
    content:
      "Join a movement of 20k+ Muslims committed to maximizing their time,reaching their goals, and living joyfully.",
    buttonText: "Learn more",
  },
];
const Carousel = () => {
  const [page, setPage] = useState(0);
  const length = carouselItem.length;
  useEffect(() => {
    setTimeout(() => {
      setPage(page === length - 1 ? 0 : page + 1);
    }, 4000);
  });

  const applyGradient = (text) => {
    const words = text.split(" ");
    return words.map((word, index) => {
      if (
        word.toLowerCase().includes("compl") ||
        word.toLowerCase().includes("motivation") ||
        word.toLowerCase().includes("burnout") ||
        word.toLowerCase().includes("solution") ||
        word.toLowerCase().includes("battles") ||
        word.toLowerCase().includes("defeat") ||
        word.toLowerCase().includes("sayf")
      ) {
        return (
          <span key={index} className={"text-gradient font-[400]"}>
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
    <div className="relative flex flex-col h-[100vh] w-[100vw]  gap-[9rem] justify-center section  mt-[7rem] ">
      <div className="flex gap-[1rem] justify-center">
        {carouselItem.map(
          ({ title, content, buttonText }, index) =>
            index === page && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ duration: 0.5 }}
                className="flex flex-col  gap-[5rem] px-[4rem] break-words carousel-item justify-center  text-center "
                key={`${index}-${title}`}
              >
                <div className="flex flex-col gap-[1rem] ">
                  <p className="text-[2rem] max-lg:text-[1.5rem] dark-text serif">
                   {title}
                  </p>

                  <motion.p className="font-[400] dark-text text-[0.9rem] sm:text-[1rem]">
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
              index === page
                ? "active-carousel transition-all duration-500 ease-in"
                : " circle transition-all duration-500 ease-in"
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
