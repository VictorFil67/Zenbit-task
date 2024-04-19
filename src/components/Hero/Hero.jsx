// import React from "react";
// import { pharmacies } from "./pharmacies";
import { NavLink } from "react-router-dom";
import s from "./Hero.module.css";

export const Hero = () => {
  return (
    <div className={s.hero}>
      <div className={s.info}>
        <h1 className={s.title}>The chemical negatively charged</h1>
        <p className={s.text}>
          Numerous calculations predict, and experiments confirm, that the force
          field reflects the beam, while the mass defect is not formed. The
          chemical compound is negatively charged. Twhile the mass defect is
        </p>
        <NavLink className={s.getStarted} to="/login">
          Get Started
        </NavLink>
      </div>
    </div>
  );
};
