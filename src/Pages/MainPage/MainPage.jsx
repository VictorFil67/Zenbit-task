// import React from "react";

// import { useEffect, useState } from "react";
import { Pictures } from "../../components/Pictures/Pictures.jsx";
import { Hero } from "../../components/Hero/Hero.jsx";
import s from "./MainPage.module.css";
// import { pharmacies } from "../../components/Hero/pharmacies.js";

export const MainPage = () => {
  // const [medicines, setMedicines] = useState([]);

  // useEffect(() => {
  //   getMedicines();
  // }, []);

  // console.log(medicines);

  // function getMedicines(pharmacyId = 1) {
  //   const pharmasyIndex = pharmacies.findIndex(
  //     (pharmacy) => pharmacy.id === pharmacyId
  //   );
  //   setMedicines(pharmacies[pharmasyIndex].medicines);
  // }

  return (
    <main className={s.main}>
      <section className={s.heroSection}>
        <div className="container">
          <Hero />
        </div>
      </section>
      <section className={s.pictures}>
        <div className="container">
          <Pictures />
        </div>
      </section>
    </main>
  );
};
