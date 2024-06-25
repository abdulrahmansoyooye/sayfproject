import Welcome from "@/components/Welcome";
import React from "react";

const NewsLetter = () => {
  return (
    <div>
      <Welcome title={"News Letter"} />
      <div className="flex flex-col p-[12rem_0rem] gap-[5rem] items-center">
        <div className=" text-center flex items-center gap-[0.5rem] flex-col">
          <h1 className="text-[1.8rem] text-center ">
            Subsribe to our <span className="text-gradient-brown"> News </span>{" "}
            Letter
          </h1>

          <p className="text-[1rem] font-[400]">
            This is the NewsLetter you'd be reading everytime{" "}
          </p>
        </div>
        <div>
          <a href="https://sayf.ck.page/newsletter" target="_blank">
            <button className="black_btn flex flex-col scale-[1.2] hover:scale-[1.5]">
              <span> See All News letters</span>
              <div></div>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
