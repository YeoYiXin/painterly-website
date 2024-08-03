const About = ({ onGalleryClick, onDocumentationClick, onContactClick }) => {
  return (
    <div className="lg:w-1/2 md:w-1/2 sm:w-[10vw] grid grid-cols-2 place-items-center gap-3 p-5">
      {/* Gallery */}
      <div className="w-20 h-20 md:w-40 md:h-40 cursor-pointer rounded-full flex items-center justify-center bg-[#8cc9dd7e] hover:ease-in-out hover:shadow-sm hover:bg-[#ffffff85]" onClick={onGalleryClick}>
        <span className="cursor-pointer lg:text-xl md:text-md sm:text-sm text-sm">Gallery</span>
      </div>
      {/* Contact */}
      <div className="w-20 h-20 md:w-40 md:h-40 cursor-pointer rounded-full flex items-center justify-center bg-[#8cc9dd7e] hover:ease-in-out hover:shadow-sm hover:bg-[#ffffff85]" onClick={onContactClick}>
        <span className="cursor-pointer lg:text-xl md:text-md sm:text-sm text-sm">Contact</span>
      </div>
    </div>
  );
};

export default About;
