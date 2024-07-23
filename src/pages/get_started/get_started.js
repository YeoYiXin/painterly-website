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

    <div className="flex-row space-x-6"
      style={{
        backgroundImage: 'linear-gradient(to right, #c5ede8, #fcedf4, #dac5ed)'
      }}>
      <div className='flex flex-col p-28'>
        <div className='flex flex-row items-center w-[80vw]'>
          <div className="w-1/2 justify-center items-center align-middle">
            <div className="flex font-bold text-2xl items-center justify-center align-middle">Choose a filter</div>
          </div>
          <div className="flex pb-10 pt-0">
            <Filter onFilterChange={handleFilterChange} />
          </div>
        </div>
        <div className='flex flex-row items-center w-[80vw]'>
          <div className="w-1/2 justify-center items-center align-middle">
            <div className="flex font-bold text-2xl items-center justify-center align-middle">Upload Image</div>
          </div>
          <div className="flex pb-10 pt-0">
            <UploadImage onImageUpload={handleImageUpload} />
          </div>
        </div>
        {/* <div className='flex flex-row items-center w-[80vw]'>
          <div className="w-1/2 justify-center items-center align-middle">
            <div className="flex font-bold text-2xl items-center justify-center align-middle">Output</div>
          </div>
          <div className="pb-10 pt-0">
            <div className="cursor-pointer w-[50vw] h-[10rem] grid place-content-center p-5 rounded-xl border-[#171955] border-4">
              placeholder
            </div>
          </div>
        </div> */}
        <div className='flex flex-row items-center w-[80vw]'>
          <div className="w-1/2 justify-center items-center align-middle">
            <div className="flex font-bold text-2xl items-center justify-center align-middle">Output</div>
          </div>
          <div className="pb-10 pt-0 ">
            {/* <Output imageUrl={imageUrl} /> */}
            {loading ? (
              <div>Loading...</div> // Show loading indicator while loading
            ) : (
              <Output imageUrl={filteredUrl} />
            )}
          </div>
        </div>
        <div className='flex flex-row items-center w-[80vw]'>
          <div className="w-1/2 justify-center items-center align-middle">
            <div className="flex font-bold text-2xl items-center justify-center align-middle">Download Image</div>
          </div>
          <div className="pb-10 pt-0">
            <DownloadImage imageUrl={filteredUrl} />
          </div>
        </div>
      </div>
    </div >
  );
}

export default GetStarted;
{/* 
          <div className="w-1/2 h-1/2 flex  p-10 pt-0">
            <Output imageUrl={imageUrl} />
            {loading ? (
              <div>Loading...</div> // Show loading indicator while loading
            ) : (
              <Output imageUrl={filteredUrl} />
            )}
          </div> */}
