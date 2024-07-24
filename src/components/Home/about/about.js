const About = ({ onGalleryClick, onDocumentationClick, onContactClick }) => {
  return (
    <div className="w-full grid grid-cols-3 place-items-center gap-10 p-10">
      {/* Gallery */}
      <div className="w-20 h-20 md:w-40 md:h-40 cursor-pointer rounded-full flex items-center justify-center bg-[#8cc9dd7e] hover:ease-in-out hover:shadow-sm hover:bg-[#ffffff85]" onClick={onGalleryClick}>
        <span className="cursor-pointer lg:text-xl md:text-md sm:text-xs text-sm">Gallery</span>
      </div>
      {/* Documentation */}
      <div className="w-20 h-20 md:w-40 md:h-40 cursor-pointer rounded-full flex items-center justify-center bg-[#8cc9dd7e] hover:ease-in-out hover:shadow-sm hover:bg-[#ffffff85]" onClick={onDocumentationClick}>
        <span className="cursor-pointer lg:text-xl md:text-md sm:text-xs text-sm">Documentation</span>
      </div>
      {/* Contact */}
      <div className="w-20 h-20 md:w-40 md:h-40 cursor-pointer rounded-full flex items-center justify-center bg-[#8cc9dd7e] hover:ease-in-out hover:shadow-sm hover:bg-[#ffffff85]" onClick={onContactClick}>
        <span className="cursor-pointer lg:text-xl md:text-md sm:text-xs text-sml">Contact</span>
      </div>
    </div>
  );
};

export default About;
