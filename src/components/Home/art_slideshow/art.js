import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import CartoonImage from "./Cartoon.JPG";
import WaterColourImage from "./watercolour.JPG";

const Art = () => {
  const images = [CartoonImage, WaterColourImage]; // Duplicating one of the images to make three slides

 
  return (
    <div className="w-[100%] h-[100%]">
      <Slide
        indicators={true}
        arrows={true}
        autoplay={false}
        duration={5000}
        transitionDuration={500}
        className=" w-fit h-full items-center justify-center"
      >
        {images.map((image, index) => (
          <div
          className="each-slide-effect flex items-center justify-center max-w-full max-h-full"
          key={index}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className=" w-full h-[20rem] md:h-[23rem] lg:h-[30rem]" // Responsive heights
          ></div>
        </div>
        ))}
      </Slide>
    </div>
  );
};

export default Art;
