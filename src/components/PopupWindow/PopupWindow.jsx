import { createPortal } from "react-dom";

const PopupWindow = () => {
  return (
    <>
      {createPortal(
        <div>PopupWindow with portal</div>,
        document.querySelector("#popup-root")
      )}
    </>
  );
};

export default PopupWindow;
