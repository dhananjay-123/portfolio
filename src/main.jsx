import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// REMOVE PRELOADER AFTER FULL PAGE LOAD
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");

  if (preloader) {
    preloader.classList.add("hide");

    // wait for fade-out animation
    setTimeout(() => {
      preloader.remove();
    }, 700);
  }
});
