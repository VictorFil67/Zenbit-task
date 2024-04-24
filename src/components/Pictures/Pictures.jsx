// import React from "react";
// import { useEffect } from "react";
import { useSelector } from "react-redux";
import s from "./Pictures.module.css";
import { selectPictures } from "../../store/pictures/selectors";

export const Pictures = () => {
  const pictures = useSelector(selectPictures);
  console.log(pictures);
  // [
  //   "/zenbit-task/src/images/pictures/Component32.png",
  //   "/zenbit-task/src/images/pictures/Component36.png",
  //   "/zenbit-task/src/images/pictures/Component37.png",
  //   "/zenbit-task/src/images/pictures/Component38.png",
  // ];
  return (
    <div className={s.pictures}>
      <h2 className={s.picturesTitle}>Open Deals</h2>
      <ul className={s.picturesList}>
        {pictures.map((picture) => (
          <li className={s.picture} key={picture._id}>
            <img
              className={s.img}
              src={picture.src}
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
