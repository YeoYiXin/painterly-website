import React from 'react';

const Frame = () => {
  return (
    <div className="flex items-left justify-left align-middle pt-10 pl-[20vw]">
      <div className="flex flex-row items-center gap-8">
        <video
          className="w-[20vw] h-full rounded-3xl"
          autoPlay
          loop
          muted
        >
          <source src="video.mp4" type="video/mp4" />
        </video>
        <div className="flex items-center justify-center h-1/2 gap-10 md:gap-10 z-100">
          <div>
            <span className="font-bold text-4xl md:text-5xl">P</span>
          </div>
          <div>
            <span className="font-bold text-4xl md:text-5xl">A</span>
          </div>
          <div>
            <span className="font-bold text-4xl md:text-5xl">I</span>
          </div>
          <div>
            <span className="font-bold text-4xl md:text-5xl">N</span>
          </div>
          <div>
            <span className="font-bold text-4xl md:text-5xl">T</span>
          </div>
          <div>
            <span className="font-bold text-4xl md:text-5xl">E</span>
          </div>
          <div>
            <span className="font-bold text-4xl md:text-5xl">R</span>
          </div>
          <div>
            <span className="font-bold text-4xl md:text-5xl">L</span>
          </div>
          <div>
            <span className="font-bold text-4xl md:text-5xl">Y</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Frame;
//  frameborder='0' width='100%' height='full' z-0 className='flex