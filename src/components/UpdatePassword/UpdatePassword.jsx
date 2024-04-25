import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
// import { updatePasswordThunk } from "../../store/auth/thunks";
import s from "./UpdatePassword.module.css";
import { updatePasswordThunk } from "../../store/auth/operations";

export const UpdatePassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const dispatch = useDispatch();
  const tempCode = useParams("tempCode");
  const navigate = useNavigate();

  function onSubmit({ newPassword }) {
    dispatch(updatePasswordThunk({ tempCode, newPassword }))
      .unwrap()
      .then(() => {
        toast.info("Your password change succsessful!\nPlease login!");
        navigate("/signin");
      })
      .catch(() => toast.error("Oops something went wrong!!"));
  }

  return (
    <div className={s.loginWrap}>
      <h1 className={s.formTitle}>Forgot password?</h1>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={s.inputBlockWrap}>
          <div className={s.inputWrap}>
            <label className={s.label} htmlFor="password">
              New password
            </label>
            <input
              className={s.input}
              placeholder="Password"
              type="password"
              {...register("newPassword", {
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            <span className={s.error}>{errors.password?.message}</span>
          </div>

          <div className={s.inputWrap}>
            <label className={s.label} htmlFor="password">
              Confirm new password
            </label>
            <input
              className={s.input}
              placeholder="Password"
              type="password"
              {...register("confirmPassword", {
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            <span className={s.error}>{errors.password?.message}</span>
          </div>
        </div>
        <button name="submit" className={s.submit} type="submit">
          Update
        </button>
      </form>
    </div>
  );
};
