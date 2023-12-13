import { useState } from "react";
import left from "../../assets/images/vector-left.svg";
import right from "../../assets/images/vector-right.svg";


export const Carousel = ({slides}) => {
    const [currentSlide, setCurrentIndex] = useState(0); 

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      };
    
      const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
      };
    

    return (
        <div className="carousel-container">
        {slides.length > 1 && (
          <div className="carousel">
            <img src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
  
            {slides.length > 1 && (
				<img
					src={left} 
					alt="left"
					onClick={goToPrevSlide}
					className="leftArrow"
					aria-label="left arrow"
				/>
			)}
			{slides.length > 1 && (
				<img
					src={right}
					alt="right"
					onClick={goToNextSlide}
					className="rightArrow"
					aria-label="right arrow"

				/>
			)}
  
            <div className="image-count">
              {slides.length > 1 && `${currentSlide + 1} / ${slides.length}`}
            </div>
          </div>
        )}
      </div>
    );


}