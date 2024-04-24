import { useForm } from "react-hook-form";
import s from "./RegisterForm.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signUpThunk } from "../../store/auth/operations";
import { toast } from "react-toastify";

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  // console.log(methods);

  function onSubmit({ email, password }) {
    // const user = {
    //   email,
    //   password,
    // };
    // console.log(user);
    dispatch(signUpThunk({ email, password }))
      .unwrap()
      .then(() => {
        toast.info(`Please Login`);
        navigate("/login");
      })
      .catch((err) => {
        toast.error(err);
      });
  }
  return (
    <div className={s.loginWrap}>
      <h1 className={s.formTitle}>Register</h1>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={s.inputBlock}>
          <div className={s.inputBlockWrap}>
            <div className={s.inputWrap}>
              <label className={s.label} htmlFor="email">
                Email
              </label>
              <input
                className={s.input}
                placeholder="Email"
                type="text"
                {...register("email", {
                  pattern: {
                    value:
                      /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
                    message: "Please write valid email",
                  },
                })}
              />
              <span className={s.error}>{errors.email?.message}</span>
            </div>

            <div className={s.inputWrap}>
              <label className={s.label} htmlFor="password">
                Password
              </label>
              <input
                className={s.input}
                placeholder="Password"
                type="password"
                {...register("password", {
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
              <span className={s.error}>{errors.password?.message}</span>
            </div>
          </div>
          {/* <Link className={s.signUpLink}>Forgot password?</Link> */}
        </div>
        <button name="submit" className={s.submit} type="submit">
          Sign Up
        </button>
      </form>
      <div className={s.signUp}>
        <p className={s.signUpText}>Do you have account? </p>
        <Link className={s.signUpLink} to="/login">
          Sign In
        </Link>
      </div>
    </div>
  );
};
