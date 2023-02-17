import React from "react";
import contentImage from "../../assets/images/illustration-mockups.svg";
import "./styles.scss";

export const Hero = () => {
  return (
    <div className="hudd-hero mx-auto row align-items-center">
      <div className="hudd-hero__content row  align-items-center">
        <div className="hudd-hero__content--left col-md-5 col-12 mb-5 mb-md-0 ps-md-5  ps-sm-0 text-md-start text-center d-flex flex-column align-items-center align-items-md-start ">
          <h2 className="hudd-hero__content--title mb-md-5 ">
            Build The Community Your Fans Will Love
          </h2>
          <p className="hudd-hero__content--paragraph mb-md-5">
            Incididunt culpa nisi enim aliqua voluptate ex eiusmod eu magna
            laboris ad in Lorem. Proident dolor laborum sunt proident excepteur
            labore sit sunt reprehenderit eu mollit nisi ex. Proident in
            voluptate cupidatat sit velit voluptate dolore. Do pariatur quis
            deserunt incididunt eiusmod veniam sit est laborum. Consequat duis
            commodo reprehenderit minim velit.
          </p>
          <button className="hudd-hero__btn-content btn btn-content d-block">
            Get Started For Free
          </button>
        </div>
        <div className="hudd-hero__content--right col-md-7 col-12 d-flex justify-content-center">
          <div className="hudd-hero__content--image-container">
            <img
              src={contentImage}
              className="hudd-hero__content--image"
              alt="image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
