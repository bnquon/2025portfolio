"use client";
import { AutoTextSize } from "auto-text-size";
import PageContainer from "../PageContainer";

export default function Footer() {
  return (
    <PageContainer paddingBottom="pb-0">
      <AutoTextSize maxFontSizePx={400} mode="oneline">
        <p className="font-bold tracking-tight">BRANDON©{new Date().getFullYear()}</p>
      </AutoTextSize>
      <div className="flex justify-between w-full mt-[-96px]">
        <p>CREATED BY ME 🧑🏻‍💻</p>
        <p>BACK TO TOP</p>
      </div>
    </PageContainer>
  );
}
