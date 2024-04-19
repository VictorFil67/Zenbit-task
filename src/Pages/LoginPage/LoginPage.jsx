// import React from 'react'
import { Cart } from "../../components/Cart/Cart";
import s from "./LoginPage.module.css";

export const LoginPage = () => {
  return (
    <main className={s.mainShoppingCart}>
      <div className={s.info}>
        <section className={s.customer}>{/* <Customer /> */}</section>
        <section className={s.cart}>
          <Cart />
        </section>
      </div>
      <section className={s.total}>{/* <Total/> */}</section>
    </main>
  );
};
