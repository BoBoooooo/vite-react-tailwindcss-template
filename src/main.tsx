import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import loadable from "@loadable/component";
import App from "./App";
import "./index.css";

const About = loadable(() => import("./routes/About"));
const Home = loadable(() => import("./routes/Home"));
const NotFound = loadable(() => import("./routes/NotFound"));

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
