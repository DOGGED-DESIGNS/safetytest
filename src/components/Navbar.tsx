import React from "react";
import Maxwrapper from "./Maxwrapper";
import { motion } from "framer";
import { CircleUser, MenuIcon, User } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

export default function Navbar() {
  return (
    <div>
      <Maxwrapper newClass=" bg-safePri">
        <nav className=" px-3 ">
          <div className=" flex items-center h-[60px]">
            <div>
              <img alt=" logo" />
            </div>

            <div className=" flex items-center gap-4 ml-auto">
              <Link href={"#"}>
                <CircleUser className=" text-safeDark h-8 w-8" />
              </Link>
              <Link href={"#"} className=" flex flex-col space-y-1">
                <span className="h-[3px]  block w-6 bg-slate-900 " />
                <span className="h-[3px]  block w-6 bg-slate-900 " />
                <span className="h-[3px]  block w-6 bg-slate-900 " />
              </Link>
            </div>
          </div>
        </nav>
      </Maxwrapper>
    </div>
  );
}
