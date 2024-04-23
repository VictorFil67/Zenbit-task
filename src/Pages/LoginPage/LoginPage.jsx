// import React from 'react'
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { Vue } from "../../components/Vue/Vue";
import s from "./LoginPage.module.css";

export const LoginPage = () => {
  return (
    <main className="container">
      <section className={s.mainLogin}>
        <div className={s.vue}>
          <Vue />
        </div>
        <div className={s.info}></div>
        <div className={s.loginForm}>
          <LoginForm />
        </div>
      </section>
    </main>
  );
};
