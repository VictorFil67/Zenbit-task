// import React from "react";

// import { useEffect, useState } from "react";
import { Pictures } from "../../components/Pictures/Pictures.jsx";
import { Hero } from "../../components/Hero/Hero.jsx";
import s from "./MainPage.module.css";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/auth/selectors.js";
import { selectPictures } from "../../store/pictures/selectors.js";

export const MainPage = () => {
  const user = useSelector(selectUser);
  const pictures = useSelector(selectPictures);

  return (
    <main className={s.main}>
      <section className={s.heroSection}>
        <div className="container">
          <Hero />
        </div>
      </section>
      {user && pictures && (
        <section className={s.pictures}>
          <div className="container">
            <Pictures />
          </div>
        </section>
      )}
    </main>
  );
};
