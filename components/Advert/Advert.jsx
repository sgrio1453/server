"use client";
import React from "react";
import Image from "next/image";

const Advert = () => {
  return (
    <div className="h-full w-full bg-red-2 flex items-center justify-center">
      <Image
        src="/images/advert.png"
        alt="advert"
        width={1300}
        height={300}
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default Advert;
