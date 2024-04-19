// import React from "react";

// import { useEffect, useState } from "react";
// import { Medicines } from "../../components/Medicines/Medicines.jsx";
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
      <section>
        <Hero />
      </section>
      {/* <section className={s.medicines}>
        <Medicines medicines={medicines} />
      </section> */}
    </main>
  );
};
