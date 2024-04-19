// import React from 'react'
import s from "./Cart.module.css";

export const Cart = () => {
  return (
    <ul className={s.cartList}>
      <li className={s.cartItem}>
        <img src="" alt="" />
        <div className={s.medicineInfo}>
          <h2>Paracetamol</h2>
          <p>Price: {888}</p>
          <input className={s.number} type="number" />
        </div>
      </li>
      {/* <li className="cartItem">
        <img src="" alt="" />
        <input className={s.number} type="number" />
      </li>
      <li className="cartItem">
        <img src="" alt="" />
        <input className={s.number} type="number" />
      </li> */}
    </ul>
  );
};
