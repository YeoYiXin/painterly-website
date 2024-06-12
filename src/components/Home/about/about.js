const About = ({onGalleryClick, onDocumentationClick, onContactClick}) => {
  return (
    <div className="w-full grid grid-cols-3 place-items-center gap-10 p-10">
      {/* Gallery */}
      <div className="w-20 h-20 md:w-40 md:h-40 cursor-pointer rounded-full flex items-center justify-center bg-gray-300 hover:ease-in-out hover:shadow-sm hover:bg-gray-400" onClick={onGalleryClick}>
        <span className="cursor-pointer text-md md:text-xl">Gallery</span>
      </div>
      {/* Documentation */}
      <div className="w-20 h-20 md:w-40 md:h-40 cursor-pointer rounded-full flex items-center justify-center bg-gray-300 hover:ease-in-out hover:shadow-sm hover:bg-gray-400" onClick={onDocumentationClick}>
        <span className="cursor-pointer text-[11px] md:text-xl">Documentation</span>
      </div>
      {/* Contact */}
      <div className="w-20 h-20 md:w-40 md:h-40 cursor-pointer rounded-full flex items-center justify-center bg-gray-300 hover:ease-in-out hover:shadow-sm hover:bg-gray-400" onClick={onContactClick}>
        <span className="cursor-pointer text-md md:text-xl">Contact</span>
      </div>
    </div>
  );
};

export default About;
