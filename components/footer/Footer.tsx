"use client";
import { AutoTextSize } from "auto-text-size";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCaretUp } from "@fortawesome/free-solid-svg-icons";
import PageContainer from "../PageContainer";
import { useEffect, useState } from "react";

export default function Footer() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  if (!isMounted) return null;

  return (
    <PageContainer key="footer" paddingBottom="sm:pb-4 2xl:pb-0 pb-8">
      <div className="flex flex-col w-full relative">
        <AutoTextSize maxFontSizePx={400} mode="oneline" className="relative">
          <p className="font-bold tracking-tight">BRANDON©2025</p>
        </AutoTextSize>
        <div className="flex justify-between absolute top-[85%] text-sm w-full">
          <p>CREATED IN REACT 🧑🏻‍💻</p>
          <a href="#" className="flex items-center">
            <FontAwesomeIcon icon={faSquareCaretUp} />
            <p className="ml-2">BACK TO TOP</p>
          </a>
        </div>
      </div>
    </PageContainer>
  );
}
