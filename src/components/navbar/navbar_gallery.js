import React from 'react'

const NavBarGallery = ({selected, onClick }) => {
  const isSelected = selected === "gallery";
  const handleClick = () => {
    onClick("gallery");
  };
  return (
    <div
    className={`cursor-pointer text-sm md:text-base ${isSelected ? "font-bold underline" : ""}`}
    onClick={handleClick}
  >Gallery</div>
  )
}

export default NavBarGallery