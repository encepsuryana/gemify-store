import React, { FC } from "react";

interface Props {}

const Banner: FC<Props> = ({}) => {
  return (
    <div className="w-64 carousel rounded-box">
      <div className="carousel-item w-full">
        <img
          src="https://api.lorem.space/image/game?w=256&h=400&hash=8B7BCDC2"
          className="w-full"
          alt="Tailwind CSS Carousel component"
        />
      </div>
      
    </div>
  );
};

export default Banner;
