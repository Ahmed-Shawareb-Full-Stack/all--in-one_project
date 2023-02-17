import React from "react";
import grow from "../assets/images/illustration-grow-together.svg";
import flowing from "../assets/images/illustration-flowing-conversation.svg";
import users from "../assets/images/illustration-your-users.svg";
import "./styles.scss";
export const Main = () => {
  return (
    <main className="hudd-main row justify-content-center ">
      <section className="hudd-section row justify-content-between align-items-center ">
        <div className="hudd-section__content col-md-6 col-sm-12">
          <h2 className="hudd-section__content--title">Growing Together</h2>
          <p className="hudd-section__content--paragraph">
            In eiusmod cupidatat occaecat laboris cupidatat aliqua. Enim ex
            excepteur ad reprehenderit tempor velit laborum occaecat anim aute
            eiusmod. Anim tempor ex commodo do excepteur tempor aute ad occaecat
            ad officia culpa ad. Eu velit officia cillum veniam laboris ex
            pariatur cupidatat enim magna amet aute.
          </p>
        </div>
        <div className="hudd-section__image-container col-md-6 col-sm-12 d-flex  justify-content-center align-items-center">
          <img src={grow} className="hudd-section__image" alt="photo" />
        </div>
      </section>
      <section className="hudd-section row justify-content-between align-items-center">
        <div className="hudd-section__image-container col-md-6 col-sm-12  d-flex  justify-content-center align-items-center">
          <img src={flowing} className="hudd-section__image" alt="photo" />
        </div>
        <div className="hudd-section__content col-md-6 col-sm-12">
          <h2 className="hudd-section__content--title">
            Flowing Conversations
          </h2>
          <p className="hudd-section__content--paragraph">
            Est dolore tempor do nostrud ipsum Lorem proident pariatur sit qui
            ad minim dolore. Nulla nulla do laboris laboris proident sunt
            excepteur laboris dolor labore. Ut veniam do ullamco occaecat ad
            nostrud nisi. Adipisicing proident culpa consequat labore officia
            dolor irure duis minim.{" "}
          </p>
        </div>
      </section>
      <section className="hudd-section row justify-content-between align-items-center ">
        <div className="hudd-section__content col-md-6 col-sm-12">
          <h2 className="hudd-section__content--title">Your Users</h2>
          <p className="hudd-section__content--paragraph">
            Labore eu reprehenderit reprehenderit aute velit sit. Ad ex minim
            aliqua fugiat elit exercitation consectetur. Enim duis labore velit
            tempor labore aute sint proident et nostrud in commodo.
          </p>
        </div>
        <div className="hudd-section__image-container col-md-6 col-sm-12 d-flex  justify-content-center align-items-center">
          <img src={users} className="hudd-section__image" alt="photo" />
        </div>
      </section>
    </main>
  );
};
