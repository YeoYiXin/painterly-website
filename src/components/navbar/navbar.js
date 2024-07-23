import React from 'react';
import NavBarLogo from './navbar_logo';
import NavBarHome from './navbar_home';
import NavBarGetStarted from './navbar_getstarted';
import NavBarGallery from './navbar_gallery';
import NavBarDocument from './navbar_document';
import NavBarContact from './navbar_contact';

const NavBar = ({ selected, onSectionClicked }) => {
  return (
    <div className='py-0 md:py-2 px-2 md:px-10 w-screen h-16 z-50 bg-[#e6f9fb] flex content-between justify-between items-center fixed gap-2'>
      <NavBarLogo onClick={onSectionClicked} />
      <NavBarHome selected={selected} onClick={onSectionClicked} />
      <NavBarGetStarted selected={selected} onClick={onSectionClicked} />
      <NavBarGallery selected={selected} onClick={onSectionClicked} />
      <NavBarDocument selected={selected} onClick={onSectionClicked} />
      <NavBarContact selected={selected} onClick={onSectionClicked} />
    </div>
  );
}

export default NavBar;
