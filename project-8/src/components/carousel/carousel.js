import React, { useState } from "react";
import left from "../../assets/images/vector-left.svg";
import right from "../../assets/images/vector-right.svg";

//carousel component to display the house images
export const Carousel = ({ slides }) => {

  //state to follow the current index of the carousel
  const [currentSlide, setCurrentIndex] = useState(0);

  //method to go to the next or previous slide
  const goToSlide = (index) => {
    setCurrentIndex((prevIndex) => (prevIndex + index + slides.length) % slides.length);
  };

  //check if there is more than 1 slide
  const multipleSlides = slides.length > 1;

  return (
    <div className="carousel-container">
      {/* check if there's is more than one slide to display  */}
      {multipleSlides && (
        <div className="carousel">
          {/* display the current slide  */}
          <img src={slides[currentSlide]} alt={`Diapositive ${currentSlide + 1}`} />

        {/* display the slides arrows (left and right)  */}
          {multipleSlides && (
            <>
              <img
                src={left}
                alt="Flèche gauche"
                onClick={() => goToSlide(-1)}
                className="leftArrow"
                aria-label="Flèche gauche"
              />
              <img
                src={right}
                alt="Flèche droite"
                onClick={() => goToSlide(1)}
                className="rightArrow"
                aria-label="Flèche droite"
              />
            </>
          )}
          {/* display the images counter if there's more than 1 slides  */}
          {multipleSlides && (
            <div className="image-count">{`${currentSlide + 1} / ${slides.length}`}</div>
          )}
        </div>
      )}
    </div>
  );
};
