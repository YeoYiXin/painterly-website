import React from 'react';
import NavBarLogo from './navbar_logo';
import NavBarHome from './navbar_home';
import NavBarGetStarted from './navbar_getstarted';
import NavBarGallery from './navbar_gallery';
import NavBarContact from './navbar_contact';
import { useDisclosure } from '@mantine/hooks';
import { Burger, Drawer, ScrollArea } from '@mantine/core';
import '@mantine/core/styles.css';
const NavBar = ({ selected, onSectionClicked }) => {
  const [opened, { toggle, close }] = useDisclosure(false);

  const handleSectionClick = (section) => {
    onSectionClicked(section);
    close();  // Close the drawer when a section is clicked
  };

  return (
    <div className="flex items-center py-0  w-screen h-16 z-50 bg-[#e6f9fb]">
      <div className="flex justify-between lg:w-[100vw] md:w-[120vw] sm:w-[130w] w-[140vw] ml-16">
        <NavBarLogo onClick={onSectionClicked} />
        <div className="md:hidden sm:hidden lg:flex hidden gap-32 w-[70vw] align-middle items-center">
          <NavBarHome selected={selected} onClick={onSectionClicked} />
          <NavBarGetStarted selected={selected} onClick={onSectionClicked} />
          <NavBarGallery selected={selected} onClick={onSectionClicked} />
          <NavBarContact selected={selected} onClick={onSectionClicked} />
        </div>
        <div className="lg:hidden flex p-5">
          <Burger lineSize={2} size="md" opened={opened} onClick={toggle} aria-label="Toggle navigation" />
        </div>
      </div>
      <Drawer opened={opened} onClose={close} padding="md" size="md">
        <ScrollArea>
          <div className="flex flex-col gap-1">
            <NavBarHome selected={selected} onClick={() => handleSectionClick('home')} />
            <NavBarGetStarted selected={selected} onClick={() => handleSectionClick('get-started')} />
            <NavBarGallery selected={selected} onClick={() => handleSectionClick('gallery')} />
            <NavBarContact selected={selected} onClick={() => handleSectionClick('contact')} />
          </div>
        </ScrollArea>
      </Drawer>
    </div>
  );
};

export default NavBar;
{/* <NavBarDocument selected={selected} onClick={onSectionClicked} /> */ }
