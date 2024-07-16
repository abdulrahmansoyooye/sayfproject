import React, { useEffect, useRef } from "react";

const InfiniteMovingCards = ({ cardIndex }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const cardWidth = cardRef.current ? cardRef.current.offsetWidth : 0;
    cardRef.current.style.transform = `translateX(-${cardIndex * cardWidth}px)`;
  }, [cardIndex]);

  return (
    <div
      className="flex transition-all ease-out duration-500  gap-[1rem] "
      ref={cardRef}
    >
      {/* Your card elements go here */}
      <div className="min-w-[100%] m-auto ">
        <div className="max-lg:w-full w-[70%] m-auto bg-primary-color p-[2rem] flex flex-col gap-[2rem] rounded-lg">
          <div className="font-[500] text-[1.2rem]">Name</div>
          <div className="text-[0.9rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            beatae quibusdam inventore quis nulla cupiditate magni? Nam unde et
            ullam animi qui ipsum. Itaque ipsam excepturi labore doloribus cum
            cumque!
          </div>
          <div className="flex flex-between text-[.8rem] dark-text">
            <div>name</div>
            <div>occupation</div>
            <div>Flag</div>
          </div>
        </div>
      </div>
      <div className="min-w-[100%] m-auto ">
        <div className="max-lg:w-full w-[70%] m-auto bg-primary-color p-[2rem] flex flex-col gap-[2rem] rounded-lg">
          <div className="font-[500] text-[1.2rem]">Name</div>
          <div className="text-[0.9rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            beatae quibusdam inventore quis nulla cupiditate magni? Nam unde et
            ullam animi qui ipsum. Itaque ipsam excepturi labore doloribus cum
            cumque!
          </div>
          <div className="flex flex-between text-[.8rem] dark-text">
            <div>name</div>
            <div>occupation</div>
            <div>Flag</div>
          </div>
        </div>
      </div>{" "}
      <div className="min-w-[100%] m-auto rubik">
        <div className="max-lg:w-full w-[70%] m-auto bg-primary-color p-[2rem] flex flex-col gap-[2rem] rounded-lg">
          <div className="font-[500] text-[1.2rem] ">Lorem ipsum dolor sit</div>
          <div className="text-[0.9rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            beatae quibusdam inventore quis nulla cupiditate magni? Nam unde et
            ullam animi qui ipsum. Itaque ipsam excepturi labore doloribus cum
            cumque!
          </div>
          <div className="flex flex-between text-[.8rem] dark-text">
            <div>name</div>
            <div>occupation</div>
            <div>Flag</div>
          </div>
        </div>
      </div>
      {/* Add more cards as needed */}
    </div>
  );
};

export default InfiniteMovingCards;
