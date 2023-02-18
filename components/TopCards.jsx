import React from "react";

const TopCards = () => {
  return (
    <div className="grid lg:grid-cols-5 gap-4 p-4">
      <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold">$2.843</p>
          <p className="text-gray-600">Daily Revenue</p>
        </div>
        <span className="bg-green-300 flex justify-center items-center p-2 rounded-lg">
          +18%
        </span>
      </div>
      <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold">$17.843</p>
          <p className="text-gray-600">YTD Revenue</p>
        </div>
        <span className="bg-green-300 flex justify-center items-center p-2 rounded-lg">
          +12%
        </span>
      </div>
      <div className=" bg-white flex justify-between w-full border p-4 rounded-lg ">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold">$9.456</p>
          <p className="text-gray-600">Customers</p>
        </div>
        <span className="bg-green-300 flex justify-center items-center p-2 rounded-lg">
          +5%
        </span>
      </div>
    </div>
  );
};

export default TopCards;
