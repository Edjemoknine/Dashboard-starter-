import React from "react";
import ButtonTn from "../../../Components/shared/ButtonTn";
import Slider from "./Slider";

type Props={
  setIsContribute:React.Dispatch<React.SetStateAction<boolean>>
}
const Hero = ({setIsContribute}:Props) => {
  return (
    <div className="h-full flex-1 my-8 bg-red-30 flex-grow flex flex-col md:flex-row gap-8 items-center">
      <div className="image-slider w-full md:w-2/3 h-full">
        {/* Image slider placeholder */}
        <div className="bg-gray-200 h-[400px] overflow-hidden flex items-center justify-center">
          {/* Image Slider Placeholder */}
          <Slider/>
        </div>
      </div>

      <div className="cards w-full md:w-1/3 flex flex-col gap-4 justify-between !h-full min-h-[400px]">
        <div className="card bg-white shadow-md rounded-lg p-6 flex-1">
          <h3 className="text-xl font-bold mb-4">Card Title 1</h3>

          <ButtonTn setIsContribute={setIsContribute} text="Add Word" type={"word"} className="bg-secondary text-sm font-medium" />
        </div>

        <div className="card bg-white shadow-md rounded-lg p-6 flex-1">
          <h3 className="text-xl mb-4">Card Title 2</h3>

          <ButtonTn setIsContribute={setIsContribute} text="Add Text" type={"text"} className="bg-info text-sm font-medium" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
