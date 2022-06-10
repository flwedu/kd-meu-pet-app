import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  HomePage,
  LoginPage,
  MissingAnimalPage,
  RegisterPage,
} from "./components/pages";

import "./styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <h1>Kd Meu Pet?</h1>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="missing" element={<MissingAnimalPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
