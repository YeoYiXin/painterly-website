import React from 'react';

const Frame = () => {
  return (
    <div className="flex items-left justify-left align-middle pt-10 pl-[15vw]">
      <div className="flex flex-row items-center gap-8">
        <video
          className="w-[20vw] h-full rounded-3xl"
          autoPlay
          loop
          muted
        >
          <source src="video.mp4" type="video/mp4" />
        </video>
        <div className="flex items-center justify-center h-1/2 gap-10 md:gap-10 z-100 text-[#626681]">
          <div className="font-bold text-4xl md:text-5xl animate-bounce">P
          </div>
          <div className="font-bold text-4xl md:text-5xl animate-bounce">A
          </div>
          <div className="font-bold text-4xl md:text-5xl animate-bounce">I
          </div>
          <div className="font-bold text-4xl md:text-5xl animate-bounce">N
          </div>
          <div className="font-bold text-4xl md:text-5xl animate-bounce">T
          </div>
          <div className="font-bold text-4xl md:text-5xl animate-bounce">E
          </div>
          <div className="font-bold text-4xl md:text-5xl animate-bounce">R
          </div>
          <div className="font-bold text-4xl md:text-5xl animate-bounce">L
          </div>
          <div className="font-bold text-4xl md:text-5xl animate-bounce">Y
          </div>
        </div>
      </div>

    </div>
  );
};

export default Frame;
//  frameborder='0' width='100%' height='full' z-0 className='flex