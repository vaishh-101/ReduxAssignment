import React from "react";
import { useSelector } from "react-redux";
import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  const dashboardStyle = {
    backgroundColor: darkMode ? "#333" : "#FFF",
    color: darkMode ? "#FFF" : "#000",
    minHeight: "100vh",
    padding: "20px",
  };

  return (
    <div style={dashboardStyle}>
      <Header />
      <Outlet  />
      <Footer />
    </div>
  );
};

export default Dashboard;
