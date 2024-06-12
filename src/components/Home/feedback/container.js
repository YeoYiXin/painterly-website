import { useState } from "react";
import Details from "./details";

const FeedbackContainer = ({ feedback }) => {
  const { id, imageUrl, username, feedback: userFeedback } = feedback;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full h-[10rem] md:h-[20rem] lg:h-[25rem] grid place-content-center"> 
      <div
        className="m-2 shadow-md cursor-pointer w-[5rem] h-[8rem] md:w-[12rem] md:h-[18rem] lg:w-[17rem] lg:h-[23rem] bg-cover"
        onClick={handleImageClick}
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        
      ></div>

      <Details isOpen={isModalOpen} onClose={closeModal}>
      <div
          className="border border-gray-300 max-w-full max-h-full grid place-content-center"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "40%",
            height: "100%",
          }}
        ></div>

        <div className="border flex flex-col items-start justify-center w-3/5 h-full overflow-y-auto p-4">
          <div>
            <h2 className="font-bold text-xl">{username}</h2>
          </div>
          <div className="pt-5">
            <p>{userFeedback}</p>
          </div>
        </div>
      </Details>
    </div>
  );
};

export default FeedbackContainer;
