import React from "react";

export default function page() {
  return (
    <>
      <div className=" p-4  flex border-2 bg-[#606060] h-lvh justify-center items-center ">
        <div className="  ">
          <div className=" max-w-screen-md m-auto h-[300px]">
            <img
              className=" h-full w-full object-contain "
              src="/site.png"
              alt="site"
            />
          </div>
          <h2 className=" font-bold text-2xl  mt-8 text-white  text-center my-auto">
            This website is under{" "}
            <span className=" text-yellow-500">CONSTRUCTION</span>
          </h2>
        </div>
      </div>
    </>
  );
}
