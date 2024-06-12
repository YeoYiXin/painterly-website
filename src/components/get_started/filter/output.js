import React, { useEffect, useState } from 'react';
const Output = ({ imageUrl }) => {
  const [imageWidth, setImageWidth] = useState(null);
  const [imageHeight, setImageHeight] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      setImageWidth(img.width);
      setImageHeight(img.height);
    };
  }, [imageUrl]);

  return (
    <div className="border w-full h-full overflow-hidden grid place-content-center p-2">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="output"
          className={`mx-auto block ${imageWidth && imageHeight ? (imageWidth > 400 || imageHeight > 400 ? 'max-w-[400px] max-h-[400px]' : 'max-w-full max-h-full') : ''}`}
        />
      ) : (
        <div className="w-full h-full grid place-items-center p-5">
          Upload Image
        </div>
      )}
    </div>
  );
};

export default Output;
