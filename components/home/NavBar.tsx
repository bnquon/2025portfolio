"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { DATA } from "../../data/data";
import RevealAnimationWrapper from "../RevealAnimationWrapper";
import ReachOutForm from "../reachOut/ReachOutForm";

const NavItems = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleContact = () => {
    setIsContactOpen(!isContactOpen);
  };

  const handleNavClick = (item: { name: string; url: string }) => {
    console.log("Navigate to:", item);
    setIsDropdownOpen(false);
  };

  return (
    <div className="flex justify-between w-full px-12">
      <div className="flex">
        <div className="sm:text-xl h-fit text-lg font-bold rounded-xl bg-[#e5e5e5]/70 backdrop-blur-sm px-4 py-3 mr-6">
          B_Q
        </div>
        <div className="relative">
          <div className="sm:text-xl text-lg rounded-xl bg-[#e5e5e5]/70 backdrop-blur-sm min-w-max w-[250px]">
            <div
              className="px-4 py-3 cursor-pointer flex justify-between items-center"
              onClick={toggleDropdown}
            >
              Go to{" "}
              <FontAwesomeIcon
                icon={faChevronDown}
                size="sm"
                className={`w-5 h-5 transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
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
      <div className="relative">
        <div
          className={`sm:text-xl h-fit w-fit text-lg cursor-pointer bg-[#e5e5e5]/70 backdrop-blur-sm px-4 py-3 ${
            isContactOpen
              ? "rounded-t-xl rounded-bl-none rounded-br-none"
              : "rounded-xl"
          }`}
          onClick={toggleContact}
        >
          CONTACT ME
        </div>
        <div
          className={`absolute right-0 top-full transition-all duration-500 ease-out overflow-hidden rounded-bl-xl rounded-br-xl rounded-tr-none rounded-tl-xl bg-[#e5e5e5]/70 backdrop-blur-sm ${
            isContactOpen ? "opacity-100 max-h-[500px]" : "max-h-0 opacity-0"
          }`}
        >
          <ReachOutForm />
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
      className="fixed left-0 w-full z-[9999] sm:flex hidden sm:mb-6"
    >
      <NavItems />
    </RevealAnimationWrapper>
  );
}
