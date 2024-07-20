import { Divider } from '@mantine/core';
const Philosophy = () => {
  return (
    <div className="w-full h-[15rem] flex flex-col items-center justify-center">
      <div className="pb-1 text-center text-sm md:text-base">
        <p className="text-3xl p-10">
          A different approach to viewing images
        </p>
      </div>
      <Divider my="lg" style={{ borderColor: 'black', borderWidth: '2px', width: "80%" }} />
    </div>
  );
};

export default Philosophy;
