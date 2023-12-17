import React from "react";
import type { FC } from "react";
import Image from "next/image";
import PlaceholderCardImage from '@/assets/PlaceholderCardImage.png'

interface CardProps {
  name: string;
  image: string;
  instrument: string;
}

const Card: FC<CardProps> = ({ name, image, instrument }) => {
  return (
    <div
      className="p-5 flex flex-col justify-center items-center rounded-[10px] cursor-pointer w-[193px] h-[239px]"
      style={{ boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 6px 0px" }}
    >
      <div className="relative rounded-full bg-slate-400 w-[136px] h-[136px]">
        <Image
          src={image ?? PlaceholderCardImage}
          alt=""
          fill
          className="rounded-full object-center object-cover cursor-pointer"
          priority={false}
          style={{ objectFit: 'cover' }}
        />
      </div>
      <p className="mt-2 text-base lg:text-[24px] text-center font-semibold text-ellipsis overflow-hidden line-clamp-2 leading-8">
        {name}
      </p>
      <p>{instrument}</p>
    </div>
  );
};

export default Card;
