import React, { useState } from "react";

const Filter = ({ onFilterChange }) => {
  const [selected, setSelected] = useState(null);

  const isSelected = (filter) => selected === filter;

  const handleClick = (filter) => () => {
    setSelected(filter);
    onFilterChange(filter);
  };

  return (
    <div className="w-[50vw] h-[10rem] flex-col justify-center mb-10 mt-10 align-middle items-center">
      <div className="w-[50vw] h-full grid grid-cols-3 place-items-center rounded-xl border-[#171955] border-4">
        {/* Cartoon */}
        <div
          className={`cursor-pointer text-sm md:text-base py-4 px-6 md:px-10 ${isSelected("cartoon") ? "bg-lightPink" : "bg-gray-300"}`}
          onClick={handleClick("cartoon")}
        >
          Cartoon
        </div>
        {/* Watercolour */}
        <div
          className={`cursor-pointer text-sm md:text-base py-4 px-3 md:px-10 m-2 ${isSelected("watercolour") ? "bg-lightPink" : "bg-gray-300"}`}
          onClick={handleClick("watercolour")}
        >
          Watercolour
        </div>
        {/* Impressionism */}
        <div
          className={`cursor-pointer text-sm md:text-base py-4 px-1 md:px-10 m-2 ${isSelected("impressionism") ? "bg-lightPink" : "bg-gray-300"}`}
          onClick={handleClick("impressionism")}
        >
          Impressionism
        </div>
      </div>
    </div>
  );
};

export default Filter;
