// import React from "react";
// import { useEffect } from "react";
import s from "./Pictures.module.css";

export const Pictures = () => {
  const pictures = [
    "/zenbit-task/src/images/pictures/Component32.png",
    "/zenbit-task/src/images/pictures/Component36.png",
    "/zenbit-task/src/images/pictures/Component37.png",
    "/zenbit-task/src/images/pictures/Component38.png",
  ];
  return (
    <div className={s.pictures}>
      <h2 className={s.picturesTitle}>Open Deals</h2>
      <ul className={s.picturesList}>
        {pictures.map((picture, idx) => (
          <li className={s.pictureCard} key={idx}>
            <img
              className={s.img}
              src={picture}
              alt={picture}
              width={630}
              height={400}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
