import React from 'react'

const NavBarLogo = ({ onClick }) => {
  const handleClick = () => {
    onClick("home");
  };
  return (
    <div className='cursor-pointer lg:p-0 md:pt-7 sm:pt-6 pt-6'
      onClick={handleClick}
    >Logo</div>
  )
}

export default NavBarLogo