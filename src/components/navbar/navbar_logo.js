import React from 'react'

const NavBarLogo = ({ onClick }) => {
  const handleClick = () => {
    onClick("home");
  };
  return (
    <div className='cursor-pointer lg:p-0 md:pt-7 sm:pt-6 p-6'
      onClick={handleClick}
    >
      <img src='painterly-logo.PNG' className='lg:w-[4vw] lg:h-[6vh] md:w-[5vw] md:h-[6vh] sm:w-[7vw] sm:h-[6vh] w-[9vw] h-[6vh]' />
    </div>
  )
}

export default NavBarLogo