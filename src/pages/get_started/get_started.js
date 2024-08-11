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
            console.log("success");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          setLoading(false); // Set loading to false in case of error
        });
    }
  };

  return (
    <div
      className="flex-row space-x-6"
      style={{
        backgroundImage: "linear-gradient(20deg, #c5ede8, #c9dde0,  #ffff)",
      }}
    >
      <div className="flex flex-col lg:p-28 md:p-20 sm:p-5 p-10">
        <div className="flex flex-col lg:flex-row md:flex-col sm:flex-col items-center w-[80vw]">
          <div className="w-1/2 justify-center items-center align-middle">
            <div className="flex font-bold lg:text-xl md:text-lg sm:text-md items-center justify-center align-middle">
              Choose a filter
            </div>
          </div>
          <div className="flex pb-10 pt-0">
            <Filter onFilterChange={handleFilterChange} />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row md:flex-col sm:flex-col items-center w-[80vw]">
          <div className="w-1/2 justify-center items-center align-middle">
            <div className="flex font-bold lg:text-xl md:text-lg sm:text-md items-center justify-center align-middle">
              Upload Image
            </div>
          </div>
          <div className="flex pb-10 pt-0">
            <UploadImage onImageUpload={handleImageUpload} />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row md:flex-col sm:flex-col items-center w-[80vw]">
          <div className="w-1/2 justify-center items-center align-middle">
            <div className="flex font-bold lg:text-xl md:text-lg sm:text-md items-center justify-center align-middle">
              Output
            </div>
          </div>
          <div className="pb-10 pt-0 ">
            {loading ? (
              <div>Loading...</div> // Show loading indicator while loading
            ) : (
              <Output imageUrl={filteredUrl} />
            )}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row md:flex-col sm:flex-col items-center w-[80vw]">
          <div className="w-1/2 justify-center items-center align-middle">
            <div className="flex font-bold lg:text-xl md:text-lg sm:text-md items-center justify-center align-middle">
              Download Image
            </div>
          </div>
          <div className="pb-10 pt-0">
            <DownloadImage imageUrl={filteredUrl} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
