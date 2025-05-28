"use client";
import PageContainer from "../PageContainer";
import { AutoTextSize } from "auto-text-size";

export default function Footer() {
  return (
    <PageContainer paddingBottom="pb-0">
      <AutoTextSize maxFontSizePx={300} mode="oneline">
        <p className="font-semibold">BRANDON © {new Date().getFullYear()} </p>
      </AutoTextSize>
    </PageContainer>
  );
}
