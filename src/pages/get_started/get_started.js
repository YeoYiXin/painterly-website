import React, { useState } from "react";
import Filter from "../../components/get_started/filter/filter";
import UploadImage from "../../components/get_started/load/upload";
import Output from "../../components/get_started/filter/output";
import DownloadImage from "../../components/get_started/load/download";

function GetStarted() {
  const [imageUrl, setImageUrl] = useState(null);
  const [filteredUrl, setFilteredUrl] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [loading, setLoading] = useState(false); // Add loading state

  const handleImageUpload = (originalUrl, filteredUrl) => {
    setImageUrl(originalUrl);
    setFilteredUrl(filteredUrl);
    if (originalUrl) {
      console.log(originalUrl);
    }
  };

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    filterImage(imageUrl, filter);
  };

  const filterImage = (imageUrl, filter) => {
    if (imageUrl) {
      console.log("testing!");
      setLoading(true); // Set loading to true when request starts
      fetch(`http://localhost:5000/filter`, {
        method: "POST",
        mode: "cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ image_data: imageUrl, filter_name: filter }),
      })
        .then((response) => response.json())
        .then((data) => {
          setLoading(false); // Set loading to false when response received
          if ("filteredUrl" in data) {
            console.log(data.filteredUrl);
            setFilteredUrl(data.filteredUrl);
            console.log("success")
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          setLoading(false); // Set loading to false in case of error
        });
    }
  };

  // const [selected, setSelected] = useState("cartoon");

  return (

    <div className="w-full h-1/2 grid place-items-center p-10">
      <div className="w-full grid place-items-center pb-5">
        <span className="font-bold text-2xl">Choose a filter</span>
      </div>
      <Filter onFilterChange={handleFilterChange} />
      <div className="w-full h-1/2 grid place-items-center p-10 pt-0">
        <div className="w-full grid place-items-center pb-5">
          <span className="font-bold text-2xl">Upload Image</span>
        </div>
        <UploadImage onImageUpload={handleImageUpload} />
      </div>
      <div className="w-full h-1/2 grid place-items-center p-10 pt-0">
        <div className="w-full grid place-items-center pb-5">
          <span className="font-bold text-2xl">Output</span>
        </div>
        {/* <Output imageUrl={imageUrl} /> */}
        {loading ? (
          <div>Loading...</div> // Show loading indicator while loading
        ) : (
          <Output imageUrl={filteredUrl} />
        )}
      </div>
      <div className="w-full h-1/2 grid place-items-center p-10 pt-0">
        <div className="w-full grid place-items-center pb-5">
          <span className="font-bold text-2xl">Download Image</span>
        </div>
        <DownloadImage imageUrl={filteredUrl} />
      </div>
    </div >
  );
}

export default GetStarted;
