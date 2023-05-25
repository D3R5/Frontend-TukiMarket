import React from "react";
import { Rating } from "@mui/material";
import logoUser from "../../assets/user-regular-24.png";
import "../Review/Review.css";
import { useSelector } from "react-redux";

export const Review = () => {
  const darkModes = useSelector((state) => state.darkModes);

  return (
    <div className={darkModes ? "reviews-container-dark" : "reviews-container"}>
      <div className="all-review">
        <img src={logoUser} alt="" />
        <Rating
          name="half-rating-read"
          defaultValue={2.3}
          precision={0.1}
          readOnly
          size="large"
        />
        <h4>Omar Sundaram • 9 hours ago</h4>
        <h6 className={darkModes ? "review-h6-dark" : "review-h6"}>
          The point of using Lorem Ipsum is that it has a more-or-less normal
          distribution of letters, as opposed to using 'Content here, content
          here', making it look like readable English. The point of using Lorem
          Ipsum is that it has a more-or-less normal distribution of letters, as
          opposed to using 'Content here, content here', making it look like
          readable English.
        </h6>
      </div>
    </div>
  );
};
