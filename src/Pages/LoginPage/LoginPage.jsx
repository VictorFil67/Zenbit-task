// import React from 'react'
import { useLocation } from "react-router-dom";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { Vue } from "../../components/Vue/Vue";
import s from "./LoginPage.module.css";
import { RegisterForm } from "../../components/RegisterForm/RegisterForm";

export const LoginPage = () => {
  const location = useLocation();
  return (
    <main className="container">
      <section className={s.mainLogin}>
        <div className={s.vue}>
          <Vue />
        </div>
        <div className={s.info}></div>
        <div className={s.loginForm}>
          {location.pathname === "/login" ? <LoginForm /> : <RegisterForm />}
        </div>
      </section>
    </main>
  );
};
