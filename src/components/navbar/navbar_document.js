import React from "react";

const NavBarDocument = ({ selected, onClick }) => {
  const isSelected = selected === "documentation";
  const handleClick = () => {
    onClick("documentation");
  };
  return (
    <div
      className={`cursor-pointer text-sm md:text-base ${isSelected ? "font-bold underline" : ""}`}
      onClick={handleClick}
    >
      Documentation
    </div>
  );
};

export default NavBarDocument;
