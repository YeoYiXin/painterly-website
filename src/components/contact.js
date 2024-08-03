import React, { useState } from "react";
import { Center } from "@mantine/core";
import { IconPhone, IconMail, IconUserCircle } from '@tabler/icons-react';

const Contact = ({ }) => {
    return (
        <div className='bg-[#c9dde0] justify-center'>
            <div className='flex lg:flex-row md:flex-row sm:flex-col flex-col lg:gap-32 md:gap-20 sm:gap-14 gap-14 justify-center p-20 '>
                <div className='flex-col border-[rgb(255,255,255)] bg-[rgb(114,137,143)] border-8 p-6 rounded-xl justify-center text-center'>
                    <Center>
                        <div className='w-1/2 justify-center align-middle items-center m-3' >
                            <img src='/contact_images/image_erin.jpg' className='rounded-lg' />
                        </div>
                    </Center>
                    <div className='justify-center text-center bg-[rgb(114,137,143)] text-white rounded-xl p-10 lg:text-md md:text-sm sm:text-xs text-xs'>
                        <div className='flex flex-row gap-2 text-center font-bold '>
                            <IconUserCircle />
                            Yeo Yi Xin
                        </div>
                        <div className='flex flex-row gap-2 text-center font-bold '>
                            <IconPhone />
                            ...
                        </div>
                        <div className='flex flex-row gap-2 text-center font-bold '>
                            <IconMail />
                            ...
                        </div>
                    </div>
                    <div className='mt-5 bg-[rgb(54,69,73)] rounded-xl p-10 text-white lg:w-[35vw] md:w-[35vw] sm:w-[69vw]'>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </div>

                </div>
                <div className='flex-col border-[rgb(255,255,255)] bg-[rgb(114,137,143)] border-8 p-6 rounded-xl justify-center text-center'>
                    <Center>
                        <div className='w-1/2 justify-center align-middle items-center m-3' >
                            <img src='/contact_images/image_erin.jpg' className='rounded-lg' />
                        </div>
                    </Center>
                    <div className='justify-center text-center bg-[rgb(114,137,143)] text-white rounded-xl p-10 lg:text-md'>
                        <div className='flex flex-row gap-2 text-center font-bold '>
                            <IconUserCircle />
                            Erin Chee Yu Lynn
                        </div>
                        <div className='flex flex-row gap-2 text-center font-bold '>
                            <IconPhone />
                            +60129282527
                        </div>
                        <div className='flex flex-row gap-2 text-center font-bold '>
                            <IconMail />
                            erincyl04@gmail.com
                        </div>
                    </div>
                    <div className='mt-5 bg-[rgb(54,69,73)] rounded-xl p-10 text-white lg:w-[35vw] md:w-[35vw] sm:w-[69vw]'>
                        Erin is a Year 2 Bsc. of Computer Science student specialising in UI/UX and Front End with a keen interest in software development and combining computer science with the world of visual arts. Erin’s work on the Painterly project was focused on implementing the cartoon filter and impressionism filter, as well as designing the Painterly website’s wireframe and css. Working on Painterly has allowed her to put her technical skills in both art and computer science to use in creating a project which showcases her strongest assets. The Painterly project also gave her the experience of strengthening her skills in teamwork, communication, time management, and in using tools such as GitHub and Python libraries.                    </div>

                </div>
            </div>
        </div >
    );
};

export default Contact;
