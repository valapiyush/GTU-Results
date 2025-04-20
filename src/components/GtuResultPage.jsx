import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import "../assets/styles/gtuResultPage.css";
import { Sidebar } from "./Sidebar";

export const GtuResultPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  return (
    <div className="container">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} />

      {/* Navbar */}
      <div className="navbar-container">
        <div className="menu-icon" onClick={toggleSidebar}>
          <FaBars style={{ color: "#636363", cursor: "pointer" }} />
        </div>
        <div className="logo">
          <img src="/images/gtuLogo.png" alt="" />
        </div>
        <div className="navbar-header">
          <b>GUJARAT TECHNOLOGICAL UNIVERSITY</b>
        </div>
        <div className="logout-btn">
          <a
            href="/logout"
            style={{
              textDecoration: "none",
              color: "white",
              fontSize: "12px",
              fontWeight: "bold",
            }}
          >
            Logout
          </a>
        </div>
      </div>
    </div>
  );
};
