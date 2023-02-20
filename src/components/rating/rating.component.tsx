import React from "react";
import { FaStar } from "react-icons/fa";
import { FiStar } from "react-icons/fi";

// No lifecycle methods
// No render method

type RatingProps = {
  maxStars: number;
  actualStars: number;
};

export default function Rating(props: RatingProps) {
  return (
    <div>
      {[...new Array(props.maxStars)].map((arr, index) => {
        return index < props.actualStars ? (
          <FaStar color="orange" size="1.3em" key={index} />
        ) : (
          <FiStar color="orange" size="1.3em" key={index} />
        );
      })}
    </div>
  );
}
