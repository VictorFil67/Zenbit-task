import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import s from "./ForgotPassword.module.css";
import { forgotThunk } from "../../store/auth/operations";

export const ForgotPassword = () => {
  const dispatch = useDispatch();
  //   const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  // console.log(methods);

  function onSubmit(data) {
    dispatch(forgotThunk(data))
      .unwrap()
      .then(() => toast.info("We have sent an email to recover your password."))
      .catch(() => toast.error("Oops something went wrong!!"));
  }
  return (
    <div className={s.loginWrap}>
      <h1 className={s.formTitle}>Forgot password?</h1>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
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
        <button name="submit" className={s.submit} type="submit">
          Send
        </button>
      </form>
    </div>
  );
};
