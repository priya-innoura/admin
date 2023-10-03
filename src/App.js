import React from "react";
import "./App.css";
import Dashboard from "./components/dhashboard/Dashboard";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import BrowserRouter and other necessary components
import Screen from "./components/screen/Screen";
import Table from "./components/table/Table";
import FileProcessing from "./components/file-processing/Fileprcessing";
import Slider from "./components/slider/Slider";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Screen />} />
          <Route path="/dashboard/*" element={<DashboardWithSidebar />} />
          <Route path="/table" element={<TableWithSidebar />} />
        </Routes>
      </Router>
    </div>
  );
}

function DashboardWithSidebar() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="content-wrapper">
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Table />} />
          </Routes>
        </main>
      </div>
    </>
  );
}
function TableWithSidebar() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="content-wrapper">
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Slider/>} />
          </Routes>
        </main>
      </div>
    </>
  );
}
export default App;
