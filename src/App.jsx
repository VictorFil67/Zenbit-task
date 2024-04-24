// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation/Navigation";
import { MainPage } from "./Pages/MainPage/MainPage";
import { LoginPage } from "./Pages/LoginPage/LoginPage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentThunk } from "./store/auth/operations";
import { selectUser } from "./store/auth/selectors";
import { fetchPicturesThunk } from "./store/pictures/operations";

function App() {
  // const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  useEffect(() => {
    if (!user) {
      dispatch(currentThunk());
      dispatch(fetchPicturesThunk());
    }
  }, [dispatch, user]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<MainPage />} />
          {/* <Route path="/catalog" element={<Catalog />} /> */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<LoginPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
