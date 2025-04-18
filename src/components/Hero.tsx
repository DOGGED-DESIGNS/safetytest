import React from "react";
import { Button } from "./ui/button";
import Maxwrapper from "./Maxwrapper";
import { Input } from "./ui/input";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <Maxwrapper newClass=" py-10  bg-gradient-to-tl  from-safeLightest to-safeDark   h-auto ">
        <div className=" lg:gap-14 gap-10  grid grid-cols-1 lg:grid-cols-2 ">
          <div className="   self-center ">
            <h1 className="h1 mt-10 text-safeWhite  ">
              {" "}
              Smart, reliable safety solutions built for Africa’s toughest
              environments added
            </h1>

            <p className=" mt-8 p text-safeWhite">
              your trusted safety professionals
            </p>

            <div className="mt-8  lg:flex  gap-2 ">
              <div className="lg:flex-1 h-14 my-3">
                <Input type="search" className="bg-white h-full" />
              </div>
              <div className="h-14">
                <Button className=" w-full h-full my-3 font-outfit font-bold text-white   bg-safeLightest  hover:bg-safeLight  ">
                  {" "}
                  Search{" "}
                </Button>
              </div>
            </div>
          </div>

          <div className="  h-full">
            <div className=" border-dashed border-2 border-safeAccent lg:min-h-[700px] md:min-h-[500] min-h-[300px] relative w-full">
              <Image
                className="object-contain"
                fill
                src={"/heropng3.png"}
                alt="image"
              />
            </div>
          </div>
        </div>
      </Maxwrapper>
    </>
  );
}
