"use client";
import { AutoTextSize } from "auto-text-size";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCaretUp } from "@fortawesome/free-solid-svg-icons";
import PageContainer from "../PageContainer";

export default function Footer() {
  return (
    <PageContainer paddingBottom="sm:pb-4 2x:pb-0 pb-8">
      <AutoTextSize maxFontSizePx={400} mode="oneline" className="relative">
        <p className="font-bold tracking-tight">
          BRANDON©{new Date().getFullYear()}
        </p>
        <div className="flex justify-between w-full absolute top-[85%] text-sm">
          <p>CREATED BY ME 🧑🏻‍💻</p>
          <a href="#" className="flex items-center">
            <FontAwesomeIcon icon={faSquareCaretUp} />
            <p className="ml-2">BACK TO TOP</p>
          </a>
        </div>
      </AutoTextSize>
    </PageContainer>
  );
}
