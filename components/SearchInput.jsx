import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const SearchInput = ({ setPodcasts, podcasts }) => {
  return (
    <div className="relative w-[60%] max-lg:w-[80%] m-auto">
      <input
        value={inputValue}
        className="search_input"
        placeholder="Search For Podcasts"
        onChange={handleChange}
      />
      <div className="absolute top-2 right-4 cursor-pointer">
        <Image src={"/assets/search.png"} width={20} height={20} alt="search" />
      </div>
    </div>
  );
};

export default SearchInput;
