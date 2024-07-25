import React from 'react'

const NavBarLogo = ({ onClick }) => {
  const handleClick = () => {
    onClick("home");
  };
  return (
    <div className='cursor-pointer lg:p-0 md:pt-7 sm:pt-6 p-6'
      onClick={handleClick}
    >
      <img src='painterly-logo.PNG' className='w-[3vw] h-[6vh]' />
    </div>
  )
}

export default NavBarLogo