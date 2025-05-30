"use client";
import { AutoTextSize } from "auto-text-size";
import PageContainer from "../PageContainer";

export default function Footer() {
  return (
    <PageContainer>
      <AutoTextSize maxFontSizePx={400} mode="oneline">
        <p className="font-bold tracking-tight">BRANDON©{new Date().getFullYear()}</p>
      </AutoTextSize>
    </PageContainer>
  );
}
