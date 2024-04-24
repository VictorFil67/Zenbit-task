import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import s from "./Navigation.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../store/auth/selectors";
import { logoutThunk } from "../../store/auth/operations";
import { toast } from "react-toastify";
// import SvgLogo from "../SVG/logo";

export const Navigation = () => {
  const location = useLocation();
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log(location.pathname);
  function handleLogout() {
    dispatch(logoutThunk())
      .unwrap()
      .then(() => {
        navigate("/signin");
        toast.info("Exit successful!");
      })
      .catch(() => toast.error("Ooops... Something went wrong!"));
  }

  return (
    <div>
      <header className={s.header}>
        <div className="container">
          {location.pathname === "/" && (
            <nav className={s.nav}>
              <NavLink className={s.myLogo} to="/">
                My Logo
              </NavLink>
              <div className={s.log}>
                {!user ? (
                  <>
                    <NavLink className={s.loginlink} to="/login">
                      Log In
                    </NavLink>
                    <NavLink className={s.signUpLink} to="/register">
                      Sign Up
                    </NavLink>
                  </>
                ) : (
                  <button onClick={handleLogout}>Log Out</button>
                )}
              </div>
            </nav>
          )}
        </div>
      </header>
      <Outlet />
    </div>
  );
};
