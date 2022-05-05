import React, { useCallback } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/home";
import ElaborazioniTable from "./pages/ElaborazioniTable";
import AdvancedElaborazioniTable from "./pages/AdvancedElaborazioniTable";

import CatDetails from "./pages/CatDetails";
import { ToolBar } from "./components/toolbar"
import "./App.css";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons


export default function App() {


  return (
      <BrowserRouter>
        <ToolBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/elaborazioni" element={<ElaborazioniTable />} />
          <Route path="/elaborazioni/:id" element={<CatDetails />}/>
          <Route path="/advelab" element={<AdvancedElaborazioniTable />} />

        </Routes>
      </BrowserRouter>
  );
}
