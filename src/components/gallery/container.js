import { useState } from "react";
import Details from "./details";

const GalleryContainer = ({ data }) => {
  const { id, author, image } = data;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full h-full grid place-items-center mb-2">
      <div
        className=" w-[80%] h-[90%] m-4 p-2 cursor-pointer place-items-center"
        onClick={handleImageClick}
      >
        <div className="w-full h-full">
          <img src={image} alt={author} className="w-full h-full object-cover" />
        </div>

        <div className="grid place-items-center pt-2 pb-2">
          <h2 className="lg:text-xl md:text-md sm:text-sm text-sm font-bold text-[#446665]">{author}</h2>
        </div>
      </div>

      <Details isOpen={isModalOpen} onClose={closeModal}>
        <div className="">
          <img
            src={image}
            alt={`Feedback ${id}`}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="grid place-items-center">
          <div>
            <h2 className="lg:text-xl md:text-md sm:text-sm text-sm font-bold">{author}</h2>
          </div>
        </div>
      </Details>
    </div>
  );
};

export default GalleryContainer;
