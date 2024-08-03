import React from 'react';

const Frame = () => {
  return (
    <div className="flex items-center justify-center align-middle pt-5 pb-5">
      <div className="flex flex-row items-center justify-center align-middle">
        <video
          className="w-[20vw] h-full rounded-3xl"
          autoPlay
          loop
          muted
        >
          <source src="video.mp4" type="video/mp4" />
        </video>
        <div className="flex items-center justify-center h-1/2 gap-10 md:gap-10 z-100 text-[#626681] lg:text-4xl md:text-md sm:text-4xl text-xl">
          <div className="font-bold md:text-5xl lg:tracking-[1.5em] md:tracking-[0.5em] sm:tracking-[0.3em] tracking-[0.3em]">
            PAINTERLY
          </div>
        </div>
      </div>

    </div>
  );
};

export default Frame;
//  frameborder='0' width='100%' height='full' z-0 className='flex