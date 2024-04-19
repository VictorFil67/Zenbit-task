// import React from "react";

import { useEffect, useState } from "react";
import { Medicines } from "../../components/Medicines/Medicines.jsx";
import { Shops } from "../../components/Shops/Shops.jsx";
import s from "./MainPage.module.css";
import { pharmacies } from "../../components/Shops/pharmacies.js";

export const MainPage = () => {
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    getMedicines();
  }, []);

  console.log(medicines);

  function getMedicines(pharmacyId = 1) {
    const pharmasyIndex = pharmacies.findIndex(
      (pharmacy) => pharmacy.id === pharmacyId
    );
    setMedicines(pharmacies[pharmasyIndex].medicines);
  }

  return (
    <main className={s.mainShops}>
      <section className={s.shops}>
        <Shops chosePharmacy={getMedicines} />
      </section>
      <section className={s.medicines}>
        <Medicines medicines={medicines} />
      </section>
    </main>
  );
};
