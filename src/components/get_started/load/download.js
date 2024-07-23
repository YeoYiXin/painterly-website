import Download from "./download.png";
import { IconDownload } from "@tabler/icons-react"

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
    else {
      alert("Please upload an image first");
    }
  };
  return (
    <div className="cursor-pointer w-[50vw] h-[10rem] grid place-content-center p-5 rounded-xl border-[#171955] border-4" onClick={handleImageDownload}>
      <IconDownload color="black" size={48} />

    </div>
  );
};

export default DownloadImage;
