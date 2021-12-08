import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { SliderContainer } from "../styles/SliderStyles";

const Slider = () => {
  return (
    <SliderContainer>
      <Carousel>
        <Carousel.Item>
          <img
            src="https://res.cloudinary.com/da6fz1omm/image/upload/v1638386855/Im%C3%A1genes%20Amazonas/1_wnnikg.jpg"
            alt="aa"
            className="img"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://res.cloudinary.com/da6fz1omm/image/upload/v1638391193/Im%C3%A1genes%20Amazonas/4_z3ezng.jpg"
            alt="aa"
            className="img"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://res.cloudinary.com/da6fz1omm/image/upload/v1638387147/Im%C3%A1genes%20Amazonas/3_exduie.jpg"
            alt="aa"
            className="img"
          />
        </Carousel.Item>
      </Carousel>
    </SliderContainer>
  );
};

export default Slider;
