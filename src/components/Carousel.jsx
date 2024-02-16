import { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { dataCarousel } from "./data";
import "./carousel.css";

const Carousel = () => {
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextSlide = slide === dataCarousel.length - 1 ? 0 : slide + 1;
      setSlide(nextSlide);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [slide]);

  const prevSlide = () =>
    setSlide(slide === 0 ? dataCarousel.length - 1 : slide - 1);

  const nextSlide = () =>
    setSlide(slide === dataCarousel.length - 1 ? 0 : slide + 1);
  return (
    <section className="heroSection">
      <div className="carousel">
        <BsArrowLeftCircleFill
          className="arrow arrow-left"
          onClick={prevSlide}
        />

        {dataCarousel.map((item, index) => (
          <img
            key={index}
            src={item.image}
            alt=""
            className={slide === index ? "slide" : "slide-hidden"}
          />
        ))}

        <BsArrowRightCircleFill
          className="arrow arrow-right"
          onClick={nextSlide}
        />

        <span className="indicators">
          {dataCarousel.map((_, index) => (
            <button
              key={index}
              onClick={() => setSlide(index)}
              className={
                slide === index ? "indicator" : "indicator indicator-inActive"
              }
            ></button>
          ))}
        </span>
      </div>
    </section>
  );
};

export default Carousel;
