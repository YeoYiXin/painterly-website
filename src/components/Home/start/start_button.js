const StartButton = ({ onClick }) => {
  return (
    <div className="w-full h-[5rem] md:h-[10rem] flex-col items-center justify-center">
      <div className="pb-1  text-sm md:text-base">
        <span>Note: Click anywhere within this box to get editing</span>
      </div>
      <div
        className="cursor-pointer border-2 border-black w-full h-[3rem] md:h-[8rem] flex items-center justify-center"
        onClick={onClick}
      >
        <p className="cursor-pointer text-xl">Get Started</p>
      </div>
    </div>
  );
};

export default StartButton;
