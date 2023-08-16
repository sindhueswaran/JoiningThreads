"use client"
import { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

export default function Gallery({ images }) {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // Previous Image
  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(images.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  // Next Image
  const nextSlide = () => {
    slideNumber + 1 === images.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

  return (
    <div>
      {openModal && (
        <div className="fixed top-0 bottom-0 left-0 right-0 z-50 bg-[rgba(0, 0, 0, 0.8)] flex items-center justify-center w-full h-full">
          <Icon
            icon="fa6-regular:circle-xmark"
            className="fixed w-8 h-8 cursor-pointer opacity-60 text-gray-100  z-50 hover:opacity-100 top-[40px] right-[40px]"
            onClick={handleCloseModal}
          />
          <Icon
            icon="fa6-solid:circle-chevron-left"
            className="fixed w-8 h-8 cursor-pointer opacity-60 text-gray-100  z-50 hover:opacity-100 top-[50%] -translate-x-1/2  left-[40px]"
            onClick={prevSlide}
          />
          <Icon
            icon="fa6-solid:circle-chevron-right"
            className="fixed w-8 h-8 cursor-pointer opacity-60 text-gray-100 z-50 hover:opacity-100 top-[50%] -translate-y-1/2  right-[40px]"
            onClick={nextSlide}
          />
          <div className=" ">
            <Image
              className="p-14 object-contain pointer-events-none select-none bg-black/[.8]"
              src={images[slideNumber]}
              alt="image" 
              fill 
            />
          </div>
        </div>
      )}

      <div className="columns-2 md:columns-3 lg:columns-4"> 
        {images &&
          images.map((slide, index) => {
            return (
              <div key={index} className="mb-3 cursor-pointer overflow-hidden" onClick={() => handleOpenModal(index)}>
                <Image
                  className="w-full rounded-md hover:rounded-md hover:scale-105 overflow-hidden"
                  src={slide}
                  alt="image"
                  width="640"
                  height="480"
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}
