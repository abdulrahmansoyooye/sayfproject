"use client";

import Image from "next/image";

const Error = () => {
  return (
    <div className="flex flex-col justify-center items-center rubik gap-[1rem] h-[100vh]  ">
      <div
        className=" rounded-md p-[1rem] flex flex-col justify-center items-center cursor-pointer gap-[1rem]"
        onClick={() => window.location.reload}
      >
        <Image src={"/assets/cloud.png"} width={60} height={60} alt="error" />
        <div className="text-[1.3rem] font-[500]  text-red-500">
          An Error Occured
        </div>

        <div className="text-[1rem] font-[300] flex gap-[0.5rem]">
          {" "}
          <Image
            src={"/assets/reload.png"}
            width={20}
            height={20}
            alt="error"
          />
          Retry
        </div>
      </div>
    </div>
  );
};

export default Error;
