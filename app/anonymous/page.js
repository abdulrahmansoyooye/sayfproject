"use client";
import { createMessage } from "@/utils/actions/anonymousActions";
import dynamic from "next/dynamic";
import React, { useState } from "react";
const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});

import "react-quill/dist/quill.snow.css";
const Anonymous = () => {
  const [content, setContent] = useState("");
  const [success, setsuccess] = useState(false);
  const handleSubmit = async () => {
    setContent("");

    try {
      const res = await createMessage(content);
      if (res.status === 201) {
        setsuccess(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col  gap-[5rem] [100vh] mt-[7rem] sm:mt-[10rem] p-[2rem] sm:w-[50%] m-auto">
      <div className="flex flex-col gap-[2rem]">
        <div className="serif text-[1.5rem] w-full text-center text-gradient">
          Write an Anonymous Message
        </div>
        <div className="serif text-[0.9rem]  text-left  m-auto">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
          suscipit aliquam laudantium cupiditate, non tenetur molestias cumque
          obcaecati recusandae atque odio, officia eveniet ex sed? Quo,
          nesciunt. A, tempora? Beatae!
        </div>
      </div>
      <div className="flex flex-col gap-[1rem] w-full" >
        <div>
          <ReactQuill
            value={content}
            onChange={setContent}
            required
            className="rounded-lg"
          />
        </div>
        <button type="submit" className="black_btn">
          Create Article
        </button>
      </div>
    </div>
  );
};

export default Anonymous;
