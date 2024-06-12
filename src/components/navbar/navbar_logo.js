import React from 'react'

const NavBarLogo = ({onClick }) => {
  const handleClick = () => {
    onClick("home");
  };
  return (
    <div className='cursor-pointer text-sm md:text-base'
      onClick={handleClick}
    >Logo</div>
  )
}

export default NavBarLogo