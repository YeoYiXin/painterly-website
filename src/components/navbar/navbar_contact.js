import React from "react";

const NavBarContact = ({ selected, onClick }) => {
  const isSelected = selected === "contact";
  const handleClick = () => {
    onClick("contact");
  };
  return (
    <div
      className={`cursor-pointer text-sm md:text-base ${isSelected ? "font-bold underline" : ""}`}
      onClick={handleClick}
    >
      Contact
    </div>
  );
};

export default NavBarContact;
