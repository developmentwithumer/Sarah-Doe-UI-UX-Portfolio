import Image from "next/image";
import React from "react";

const TestimonialCard = ({ count, text, img, alt, name, company }) => {
  return (
    <div className="flex gap-6 flex-col p-8 items-center justify-center bg-gray-100">
      <div className="flex">
        <p className="text-balance text-start">{text}</p>
      </div>
      <div className="flex gap-4">
        <div>
          <Image src={img} alt={alt} width={50} height={50} layout="responsive" />
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex space-x-1">
            {Array.from({ length: count }).map((_, index) => (
              <Image
                key={index}
                src="/star.svg"
                alt="Star"
                width={20}
                height={20}
              />
            ))}
          </div>
          <p className="text-xl text-start text-balance">{name}</p>
          <p className="text-start text-balance">{company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
