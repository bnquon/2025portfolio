"use client";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function BackToHome() {
  return (
    <div className="cursor-pointer 2xl:w-[80px] 2xl:h-[80px] sm:w-[60px] sm:h-[60px] w-[50px] h-[50px] bg-black rounded-full flex items-center justify-center">
      <FontAwesomeIcon
        icon={faArrowLeft}
        className="2xl:text-4xl sm:text-2xl text-xl text-white"
        onClick={() => window.history.back()}
      />
    </div>
  );
}
