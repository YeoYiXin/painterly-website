import React, { useState } from "react";

const Filter = ({ onFilterChange }) => {
  const [selected, setSelected] = useState(null);

  const isSelected = (filter) => selected === filter;

  const handleClick = (filter) => () => {
    setSelected(filter);
    onFilterChange(filter);
  };

  return (
    <div className="w-[50vw] h-[10rem] flex-col justify-center mb-10 mt-10 align-middle items-center ">
      <div className=" h-full flex flex-col gap-2 lg:flex-row md:flex-col sm:flex-col align-middle items-center justify-center rounded-xl border-[#171955] border-4 object-contain">
        {/* Cartoon */}
        <div
          className={`cursor-pointer text-xs md:text-md sm:text-xs w-full md:m-2 sm:m-1 m-1 lg:p-3 md:p-2 sm:p-1 p-1 rounded-lg text-center ${isSelected("cartoon") ? "bg-lightPink" : "bg-gray-300"}`}
          onClick={handleClick("cartoon")}
        >
          Cartoon
        </div>
        {/* Watercolour */}
        <div
          className={`cursor-pointer text-xs md:text-md sm:text-xs w-full md:m-2 sm:m-1 m-1 lg:p-3 md:p-2 sm:p-1 p-1 rounded-lg text-center ${isSelected("watercolour") ? "bg-lightPink" : "bg-gray-300"}`}
          onClick={handleClick("watercolour")}
        >
          Watercolour
        </div>
        {/* Impressionism */}
        <div
          className={`cursor-pointer text-xs md:text-md sm:text-xs w-full md:m-2 sm:m-1 m-1 lg:p-3 md:p-2 sm:p-1 p-1 rounded-lg text-center ${isSelected("impressionism") ? "bg-lightPink" : "bg-gray-300"}`}
          onClick={handleClick("impressionism")}
        >
          Impressionism
        </div>
      </div>
    </div>
  );
};

export default Filter;
