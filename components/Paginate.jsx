import React from "react";

const Paginate = ({
  paginate,
  itemsPerPage,
  totalitems,
  currentPage,
}) => {
  const numberofPage = [];
  for (let i = 1; i <= Math.ceil(totalitems / itemsPerPage); i++) {
    numberofPage.push(i);
  }
  return (
    <div className="flex justify-evenly w-full">
      {numberofPage.map((number) => (
        <div
          key={`page-${number}`}
          className={`cursor-pointer ${
            currentPage === number
              ? "bg-brown-color  text-white"
              : "bg-slate-300 text-slate-500"
          } p-[0.5rem_1rem] rounded-md `}
          onClick={() => paginate(number)}
        >
          <div>{number}</div>
        </div>
      ))}
    </div>
  );
};

export default Paginate;
