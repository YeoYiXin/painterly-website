import React, {useState} from "react";
import Upload from "./upload.png";

const UploadImage = ({ onImageUpload }) => {
    const [image, setImage] = useState(null);
  // const handleImageUpload = (event) => {
  //   console.log("uploading");
  //   const file = event.target.files[0];
  //   if (file) {
  //     const imageUrl = URL.createObjectURL(file);
  //     console.log(imageUrl);
  //     onImageUpload(imageUrl);
  //   }
  // };

  //   const handleImageUpload = (event) => {
  //     const file = event.target.files[0];
  //     if (file) {
  //       const formData = new FormData();
  //       formData.append("image", file);

  //       fetch("http://localhost:5000/upload", {
  //         method: "POST",
  //         body: formData,
  //       })
  //         .then((response) => response.json())
  //         .then((data) => {
  //           onImageUpload(data.originalUrl, data.filteredUrl);
  //         })
  //         .catch((error) => console.error("Error:", error));
  //     }
  //   };
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        onImageUpload(reader.result, reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    console.log("clicked");
    document.getElementById("imageUpload").click();
  };

  return (
    <div
      className="cursor-pointer w-full h-[10rem] border grid place-content-center p-5"
      onClick={handleClick}
    >
      <input
        type="file"
        accept=".jpg, .jpeg, .png"
        onChange={handleImageUpload}
        className="hidden"
        id="imageUpload"
      />
      <img src={Upload} alt="upload" className="w-full h-full" />
    </div>
  );
};

export default UploadImage;
