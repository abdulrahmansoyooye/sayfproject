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
    <div className="flex flex-col  gap-[5rem] [100vh] mt-[7rem] sm:mt-[10rem] p-[2rem] sm:w-[60%] m-auto">
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
      {!success ? (
        <div className="flex flex-col gap-[1rem] w-full">
          <div>
            <input
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write us a message..."
              className="border p-[1rem_2rem] w-full rounded-lg focus:border-brown-color h-[100px]"
            />
          </div>
          <button type="submit" className="black_btn" onClick={handleSubmit}>
            Send message
          </button>
        </div>
      ) : (
        <div className="text-center ">
          Thanks for that message.
          <span
            className="underline cursor-pointer"
            onClick={() => setsuccess(false)}
          >
            {" "}
            Click here to send another message
          </span>
        </div>
      )}
    </div>
  );
};

export default Anonymous;
