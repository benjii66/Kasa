import React from 'react'
import emptyStar from "../../assets/images/emptyStar.svg";
import fullStar from "../../assets/images/star-rate.svg";

//rating component with stars shapes
export const Rate = ({ score }) => {
        
    //create a rate array
        const stars = [1, 2, 3, 4, 5];
        return (
             <div className="rate-area">
                {/* mapping of the stars depending of the score  */}
                {stars.map((ratingLevel) => (
                    <img
                    key={ratingLevel.toString()}
                    className="star"
                    //use the empty or filled stars images
                    src={ratingLevel <= score ? fullStar : emptyStar}
                    alt="rating star"
                    aria-label="rating star"
                    />
                ))}
            </div>            
    );
}

