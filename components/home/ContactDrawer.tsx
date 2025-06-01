"use client";
import * as React from "react";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../drawer";

export function ContactDrawer() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <div className="sm:text-xl h-fit text-lg rounded-xl cursor-pointer bg-[#e5e5e5]/70 backdrop-blur-sm px-4 py-3">
          CONTACT ME
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <div className="w-full">
          <DrawerHeader>
            <DrawerTitle>Move Goal</DrawerTitle>
            <DrawerDescription>Set your daily activity goal.</DrawerDescription>
          </DrawerHeader>

          <DrawerFooter>
            <DrawerClose asChild></DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
