import React from 'react'
import emptyStar from "../../assets/images/emptyStar.svg";
import fullStar from "../../assets/images/star-rate.svg";

export const Rate = ({ score }) => {
    
    
        const stars = [1, 2, 3, 4, 5];
        return (
      
             <div className="rate-area">
                {stars.map((ratingLevel) => (
                    <img
                    key={ratingLevel.toString()}
                    className="star"
                    src={ratingLevel <= score ? fullStar : emptyStar}
                    alt="rating star"
                    aria-label="rating star"
                    />
                ))}
            </div>               
   
    );
}

