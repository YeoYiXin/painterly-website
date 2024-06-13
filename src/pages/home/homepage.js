import React from "react";
import Frame from "../../components/Home/frame/frame";
import StartButton from "../../components/Home/start/start_button";
import Philosophy from "../../components/Home/philosophy/philosophy";
import Art from "../../components/Home/art_slideshow/art";
import Feedback from "../../components/Home/feedback/feedback";
import About from "../../components/Home/about/about";

function HomePage({onStartButtonClick, onGalleryButtonClick, onDocumentationButtonClick, onContactButtonClick}) {
  return (
    <div className="w-screen h-[90%]">
      <div className="pt-16 w-full h-[20rem] grid place-content-center bg-gray-300">
        <Frame />
      </div>
      <div className="w-full h-2/5 px-10 py-5">
        <StartButton onClick={onStartButtonClick} />
      </div>
      <div className="w-full h-3/5 px-10 py-5">
        <Philosophy />
      </div>
      <div className="w-full h-3/5 px-10 py-5">
        <div className="w-full grid place-items-center pb-5">
          <span className="font-bold text-2xl">MORE ART BY PAINTERLY</span>
        </div>
        <div className="flex items-center justify-center">
          <Art />
        </div>
      </div>
      <div className="w-full h-3/5 px-10 py-5">
        <div className="w-full grid place-items-center pb-5">
          <span className="font-bold text-2xl">User Feedback and Edits</span>
        </div>
        <div className="flex items-center justify-center">
          <Feedback />
        </div>
      </div>
      <div className="w-full h-2/5 px-10 py-5">
        <div className="w-full grid place-items-center pb-5">
          <span className="font-bold text-2xl">More About Painterly</span>
        </div>
        <div className="flex items-center justify-center">
          <About onGalleryClick={onGalleryButtonClick}
            onDocumentationClick={onDocumentationButtonClick}
            onContactClick={onContactButtonClick}/>
        </div>
      </div>
     
    </div>
  );
}

export default HomePage;