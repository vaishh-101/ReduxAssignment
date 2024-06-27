import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ThemeToggle from "../Redux/ThemeToggle";

function Header() {
  const darkMode = useSelector((state) => state.theme.darkMode);

  const navigate = useNavigate();
  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: darkMode ? "#764ABC" : "#764ABC",
    color: darkMode ? "#FFF" : "#333",
  };

  const logoStyle = {
    display: "flex",
    alignItems: "center",
  };

  const menuStyle = {
    display: "flex",
    gap: "15px",
    listStyleType: "none",
  };

  return (
    <div style={headerStyle}>
      <div style={logoStyle}>
        <img
          src="https://www.shutterstock.com/image-vector/cute-cat-face-mask-tshirt-600nw-1737651071.jpg"
          alt="Logo"
          style={{ height: "40px", marginRight: "10px" }}
        />
        <span>MyApp</span>
      </div>
      <ul style={menuStyle}>
        <li
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          Home
        </li>
        <li
          onClick={() => {
            navigate("/dashboard/benefits");
          }}
        >
          Advantages and Disadvantages
        </li>
      </ul>
      <ThemeToggle />
    </div>
  );
}

export default Header;
