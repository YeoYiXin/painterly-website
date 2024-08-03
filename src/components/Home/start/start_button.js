

const StartButton = ({ onClick }) => {
  return (
    < div
      className="flex items-center justify-center cursor-pointer border-2 border-black w-[30vw] h-[20vh] rounded-3xl"
      onClick={onClick}
    >
      <p className="cursor-pointer lg:text-xl md:text-md sm:text-sm text-sm">Get Started</p>
    </div >
  );
};

export default StartButton;
{/* <div className="pb-1  text-sm md:text-base">
        <span>Note: Click anywhere within this box to get editing</span>
      </div> */}