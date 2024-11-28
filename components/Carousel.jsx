"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Carousel data
const carouselItems = [
  {
    title: "Life Is Too Complex",
    content:
      "Learn simple principles that erase your worries about life, career, marriage & productivity",
    buttonText: "Learn more",
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
    title: (
      <>
        Sayf; For Productive <span className="block md:inline">Muslims</span>
      </>
    ),
    content:
      "Join a movement of 20k+ Muslims committed to maximizing their time, reaching their goals, and living joyfully.",
    buttonText: "Learn more",
  },
];

// Variants for animation
const variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const Carousel = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalItems = carouselItems.length;

  // Auto-rotate carousel items
  useEffect(() => {
    const interval = setTimeout(() => {
      setCurrentPage((prev) => (prev === totalItems - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearTimeout(interval); // Cleanup interval on unmount
  }, [currentPage, totalItems]);

  return (
    <div className="relative h-[80vh] mt-[5rem]">
      {/* Carousel Content */}
      <div className="h-[50vh] pt-[3rem] px-[2rem] space-y-[1.5rem]">
        {carouselItems.map(
          ({ title, content, buttonText }, index) =>
            index === currentPage && (
              <motion.div
                key={`${index}-${title}`}
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-[5rem] justify-center text-center"
              >
                <div className="space-y-[1rem]">
                  <h2 className="text-center text-[2.4rem] max-lg:text-[2rem] dark-text serif">
                    {title}
                  </h2>
                  <motion.p className="font-[400] dark-text text-[0.9rem] sm:text-[1rem]">
                    {content}
                  </motion.p>
                </div>
                <button className="black_btn sm:max-w-[50%] m-auto w-full">
                  {buttonText}
                </button>
              </motion.div>
            )
        )}
      </div>

      {/* Carousel Indicators */}
      <div className="w-full flex gap-[2rem] justify-center mt-[7rem]">
        {carouselItems.map((_, index) => (
          <div
            key={`indicator-${index}`}
            className={`${
              index === currentPage
                ? "active-carousel transition-all duration-500 ease-in"
                : "circle transition-all duration-500 ease-in"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
