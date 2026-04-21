import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
// import ResultSection from "./components/ResultSection";
// import GameTime from "./components/GameTime";
// import Footer from "./components/Footer";
import "./App.css";
import TopBanner from "./components/TopBanner";
// import RecordChart from "./components/RecordChart";
// import KhaiwalSection from "./components/KhaiwalSection";
// import OnlinePlaySection from "./components/OnlinePlaySection";
// import FinalBanner from "./components/FinalBanner";
// import ResultGrid from "./components/ResultGrid"; /\
// import RonySection from "./components/RonySection";
// import LuckySection from "./components/LuckySection";
// import RecordTable from "./components/RecordTable";
// import ChartList from "./components/ChartList";
// import FinalInfoSection from "./components/FinalInfoSection";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import FloatingLeft from "./components/FloatingLeft";
import ChartPage from "./ChartPage";
import LoginPage from "./LoginPage";

function App() {
  return (
    <BrowserRouter>

      {/* Floating elements always visible */}
      <FloatingLeft />
      <FloatingWhatsApp />

      <Routes>

        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <div className="app">
              <Navbar />
              <Header />
              <TopBanner />
              {/* <ResultSection /> */}
              {/* <RecordChart /> */}
              {/* <KhaiwalSection /> */}
              {/* <OnlinePlaySection /> */}
              {/* <FinalBanner /> */}
              {/* <ResultGrid /> */}
              {/* <RonySection /> */}
              {/* <LuckySection /> */}
              {/* <RecordTable /> */}
              {/* <ChartList /> */}
              {/* <FinalInfoSection /> */}
              {/* <GameTime /> */}
              {/* <Footer /> */}
            </div>
          }
        />

        {/* CHART PAGE */}
        <Route path="/chart" element={<ChartPage />} />
        <Route path="/login" element={<LoginPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;