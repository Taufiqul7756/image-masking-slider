"use client";

import React, { useState } from "react";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";
import Image from "next/image";
import colored from "../images/colored.jpg";
import bnw from "../images/bnw.jpg";

const ImageComparison = () => {
  const [dragPosition, setDragPosition] = useState(50);

  const handleDrag = (e: DraggableEvent, data: DraggableData) => {
    const percentage = (data.x / 600) * 100; // Adjust for the 600px width
    setDragPosition(percentage);
  };

  const handleMoveLeft = () => {
    if (dragPosition > 0) setDragPosition(dragPosition - 2);
  };

  const handleMoveRight = () => {
    if (dragPosition < 100) setDragPosition(dragPosition + 2);
  };

  return (
    <div className="mt-20 grid items-center justify-center">
      <span className="flex items-center justify-center py-10 text-2xl font-bold text-red-600">
        Image Masking Slider
      </span>

      <div className="relative h-[400px] w-[600px]">
        {/* BnW Image */}
        <Image
          src={bnw}
          alt="bnw"
          className="absolute left-0 top-0 h-full w-full object-cover"
          layout="fill"
        />

        {/* Colored Image with dynamic clipping */}
        <div
          className="absolute left-0 top-0 h-full w-full"
          style={{
            clipPath: `inset(0 ${100 - dragPosition}% 0 0)`,
          }}
        >
          <Image
            src={colored}
            alt="colored"
            className="h-full w-full object-cover"
            layout="fill"
          />
        </div>

        {/* Draggable Slider */}
        <Draggable
          axis="x"
          bounds="parent"
          onDrag={handleDrag}
          position={{ x: (dragPosition / 100) * 600, y: 0 }} // Adjusting for 600px width
        >
          <div
            className="absolute top-0 flex h-full w-[5px] items-center justify-center bg-red-500"
            style={{ pointerEvents: "none" }}
          >
            {/* Buttons for manual control */}
            <button
              onClick={handleMoveLeft}
              className="rounded-l bg-white p-1 text-black hover:bg-gray-200"
              style={{ pointerEvents: "auto" }}
            >
              ⬅️
            </button>
            <button
              onClick={handleMoveRight}
              className="rounded-r bg-white p-1 text-black hover:bg-gray-200"
              style={{ pointerEvents: "auto" }}
            >
              ➡️
            </button>
          </div>
        </Draggable>
      </div>
    </div>
  );
};

export default ImageComparison;
