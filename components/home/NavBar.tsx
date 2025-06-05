"use client";
import { useState } from "react";
import { ChartNoAxesGanttIcon, X } from "lucide-react";
import { DATA } from "../../data/data";
import RevealAnimationWrapper from "../RevealAnimationWrapper";

const NavItems = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleNavClick = (item: { name: string; url: string }) => {
    window.location.replace(item.url);
    setIsDropdownOpen(false);
  };

  return (
    <div className="flex justify-between sm:px-[7.5%] px-6 w-screen">
      <div className="sm:text-xl h-fit text-lg font-bold rounded-xl bg-[#e5e5e5]/70 backdrop-blur-sm px-4 py-3">
        B.Q
      </div>
      <div className="relative">
        <div className="sm:text-xl text-lg rounded-xl bg-[#e5e5e5]/70 backdrop-blur-sm min-w-max sm:w-[250px] w-[150px]">
          <div
            className="px-4 py-3 cursor-pointer flex justify-between items-center"
            onClick={toggleDropdown}
          >
            Go to
            {isDropdownOpen ? (
              <X className="w-5 h-5 transition-all duration-200" />
            ) : (
              <ChartNoAxesGanttIcon className="scale-x-[-1] w-5 h-5 transition-all duration-200" />
            )}
          </div>
          <div
            className={`transition-all duration-500 ease-out overflow-hidden ${
              isDropdownOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {DATA.nav.map((item, idx) => (
              <div
                key={idx}
                className="px-4 py-3 cursor-pointer"
                onClick={() => handleNavClick(item)}
              >
                <span className="text-lg font-medium text-black whitespace-nowrap">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function NavBar() {
  return (
    <RevealAnimationWrapper
      distance={-60}
      delay={1.65}
      className="fixed left-0 mt-10 w-full z-[9999] mb-6"
    >
      <NavItems />
    </RevealAnimationWrapper>
  );
}
