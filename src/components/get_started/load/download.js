import Download from "./download.png";
const DownloadImage = ({ imageUrl }) => {
  const handleImageDownload = () => {
    if (imageUrl) {
      const link = document.createElement("a");
      link.href = imageUrl;
      link.download = "image.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
    else{
        alert("Please upload an image first");
    }
  };
  return (
    <div className="cursor-pointer w-full h-[10rem] border grid place-content-center p-5" onClick={handleImageDownload}>
      <img src={Download} alt="upload" className="w-[85%] h-[85%]" />
    </div>
  );
};

export default DownloadImage;
