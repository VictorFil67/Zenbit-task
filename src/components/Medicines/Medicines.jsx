// import React from "react";
// import { useEffect } from "react";
import s from "./Medicines.module.css";

export const Medicines = ({ medicines }) => {
  return (
    <div>
      <ul className={s.medicinesList}>
        {medicines.map((medicine) => (
          <li className={s.medicineCard} key={medicine.id}>
            <div className={s.imgWrap}>
              <img
                className={s.img}
                src={medicine.picture}
                alt={medicine.name}
                width={383}
                height={233}
              />
            </div>
            <p className={s.name}>{medicine.name}</p>
            <button
              className={s.addToCart}
              type="button"
              // onClick={() => props.chosePharmacy(pharmacy.id)}
            >
              add To Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
