import React from "react";
import Image from "next/image";
import data from "../../../interface";

const Card = () => {
  return (
    <div className="grid lg:grid-cols-2 lg:grid-rows-2 gap-8 rounded-xl">
      {data.map((element) => {
        return (
          <div className="relative min-w-sm md:min-h-[200px] rounded-xl shadow-xl border-black flex flex-row bg-white">
            {/* image */}
            <div className="bg-red-300 rounded-xl">
              <img
                src={element.img}
                alt={element.city}
                className="h-full w-full overflow-hidden bg-red-200  rounded-xl"
              ></img>
            </div>
            {/* description */}
            <div>
              <div className="flex flex-col ml-4 flex-wrap mr-2 mb-3">
                <h2 className="uppercase text-slate-600 font-semibold text-2xl ">
                  {element.city}
                </h2>
                <h3 className="text-slate-500 -mt-2 mb-3">{element.country}</h3>
                <p className="text-left pr-2 font-normal">
                  {element.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
      <div className="grid grid-cols-4 grid-rows-1 "></div>
    </div>
  );
};

export default Card;
