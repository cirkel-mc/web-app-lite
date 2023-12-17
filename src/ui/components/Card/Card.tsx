import React from "react";
import Image from "next/image";
import Button from "../Button";
import PlaceholderImage from "@/assets/PlaceholderCardImage.png";

interface CardProps {
  src: string;
  name: string;
  price: string;
  btnText: string;
  onClick: () => void;
}

const Card = (props: CardProps) => {
  const { src, name, price, btnText, onClick } = props;

  return (
    <div
      className="rounded-[10px] p-5 relative h-[330px] lg:h-[370px] hover:bg-primary-10 hover:text-white"
      style={{ boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 6px 0px" }}
    >
      <div className="relative w-[153px] h-[164px]">
        <Image
          src={src ?? PlaceholderImage}
          objectFit="cover"
          fill
          alt=""
          className="rounded-[10px]"
          style={{ boxShadow: "0px 0px 20px 10px rgba(0, 0, 0, 0.20)" }}
        />
      </div>
      <div className="flex flex-col items-center justify-center mt-[10px]">
        <p className="text-base lg:text-[24px] text-center font-semibold text-ellipsis overflow-hidden line-clamp-2 mb-1 leading-8">{name}</p>
        <p>{price}</p>
      </div>
      <div className="w-full px-2 py-2 flex justify-center mt-2 absolute bottom-[10px] left-1/2 -translate-x-1/2">
        <Button
          size="md"
          round="md"
          classes="text-base font-normal lg:font-semibold lg:text-[18px] p-2 lg:p-[10px]"
          variant="primary"
          onClick={onClick}
        >
          {btnText}
        </Button>
      </div>
    </div>
  );
};

export default Card;
