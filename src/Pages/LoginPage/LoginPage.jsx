// import React from 'react'
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { Vue } from "../../components/Vue/Vue";
import s from "./LoginPage.module.css";

export const LoginPage = () => {
  return (
    <main className={s.mainLogin}>
      <section className={s.vue}>
        <Vue />
      </section>
      <div className={s.info}></div>
      <section className={s.loginForm}>
        <LoginForm />
      </section>
    </main>
  );
};
