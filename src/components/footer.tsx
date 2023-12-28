import React from "react";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Button } from "./ui/button";


function Footer() {
  return (
    <div className="fixed bottom-0 z-50 w-full px-6 bg-black">
      <div className="flex items-center justify-between border-t border-gray-800 py-3">
        <div className="text-sm text-white">
          <span>Adam Zvada</span>
          <span className="hidden md:inline text-gray-500"> — hello@adamzvada.com</span>
        </div>
        <div className="flex justify-end gap-2 items-center">
          <a href="https://adamzvada.substack.com/" target="_blank" rel="noopener noreferrer" className=" text-gray-500 hover:text-white transition-all">
            <Button variant="link" size="sm" className=" font-normal text-sm text-white h-4">
              Subscribe to updates <MdOutlineArrowOutward className="ml-1"/>
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer;