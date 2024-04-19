import { NavLink, Outlet, useLocation } from "react-router-dom";
import s from "./Navigation.module.css";
// import SvgLogo from "../SVG/logo";

export const Navigation = () => {
  const location = useLocation();
  // console.log(location.pathname);
  return (
    <div>
      <header className={s.header}>
        {location.pathname === "/" ? (
          <nav className={s.nav}>
            <NavLink className={s.myLogo} to="/">
              My Logo
            </NavLink>
            <div className={s.log}>
              <NavLink className={s.loginlink} to="/login">
                Log In
              </NavLink>
              {/* <p className={s.delimeter}>|</p> */}
              <NavLink className={s.signUpLink} to="/login">
                Sign Up
              </NavLink>
            </div>
            {/* <NavLink className={s.link} to="/favorites">
            Favorites
          </NavLink> */}
          </nav>
        ) : (
          ""
        )}
        {/* {Route path="/"} */}

        {/* <hr /> */}
      </header>
      <Outlet />
    </div>
  );
};
