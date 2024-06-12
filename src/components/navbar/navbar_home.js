import React from 'react'

const NavBarHome = ({selected, onClick }) => {
  const isSelected = selected === "home";
  const handleClick = () => {
    onClick("home");
  };
  return (
    <div
      className={`cursor-pointer text-sm md:text-base ${isSelected ? "font-bold underline" : ""}`}
      onClick={handleClick}
    >Home</div>
  )
}

export default NavBarHome