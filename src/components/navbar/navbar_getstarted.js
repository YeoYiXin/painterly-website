import React from 'react'

const NavBarGetStarted = ({selected, onClick }) => {
  const isSelected = selected === "get-started";
  const handleClick = () => {
    onClick("get-started");
  };
  return (
    <div
      className={`cursor-pointer text-sm md:text-base ${isSelected ? "font-bold underline" : ""}`}
      onClick={handleClick}
    >Get Started</div>
  )
}

export default NavBarGetStarted