import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import s from "./Layout.module.scss";

export default function Layout() {
  return (
    <div className={s.Layout}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
