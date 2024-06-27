import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PersonAddIcon from "@mui/icons-material/PersonAdd"; 

function Signup() {
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function handleSignup() {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Save user data to localStorage
    localStorage.setItem("user", JSON.stringify({ email, password }));

    // Navigate to a different route after signup
    navigate("/login");
  }

  const backgroundStyle = {
    backgroundImage: "url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0NDQ0NDQ0HCA0ICA8IDQcNFREWFhURExUYHSggGBolGxMVITEhJSkrLi4uFx8zOD8sNygtOisBCgoKDg0NFRAPFS0ZFRktLSsrKystKysrKystLS0tNysrNy0tLS03Ky0tKy0rKzcrLSsrKy03Ky0rKysrKysrK//AABEIAKgBLAMBIgACEQEDEQH/xAAaAAADAQEBAQAAAAAAAAAAAAAAAQIDBAUH/8QAJRABAQEBAAAFBAMBAQAAAAAAAAERAgMhQWGRMXGx8IHB4UIS/8QAGQEBAQEBAQEAAAAAAAAAAAAAAQACAwQF/8QAFxEBAQEBAAAAAAAAAAAAAAAAABEBAv/aAAwDAQACEQMRAD8A+UeD4m+VzfT3a/Hw4tdHh+Jv39Xt56cNxr8fA+PhOjW2VH/CNGllfx8DE6NaA/foBS1JRdc7/RaeoMDad875z6/lkxuRq0wAgDAQDn8fwv8AqfT1k9HQeHebhzY4TaeL4f8A5vtfp7Ico6WgwCD56y7+11c3ZrlxXh9Z9vVrnYz1ldIly7ClN1cnTx3s/Pspy8dZfz7umXXbnquW4ACrTIAAREdqRpMQjjJebp89WeadLXgfQdfPe/v0OVzcd5/badOvO1jcaaNRp60xq5RqNEpwNNFTp60COUqUqC9R3z6/JwzKLGYPrnP36ExGqZ4SiKAARSs3yrm74y/j3dSe+ZZ+PYbzTz1HKZ3mzypubpSkMGQrw+s8vT8NnO18Pr0v8N5rHWLX4fefb19kBvNjDp0MvD69Pj2aWuubXPcgGlpJAAhqBxJyhPL00h899FauOsRKDms66NPWPHX+NNdc2ue4uU0applUp6kN4zq9KwoosplVqbBKktFn+KFUVQelQCZwj1AwUppI8Tnfv6MXSz8Tj1+fcbjWazAEZaBwBBrx0pjGvN1vNZ3Dacd+n7WYazYzuVsE89abpWINIFaEYlScCeWaQ+e+go06CF6vnpkqVvNZ3G8pys+auOmOWqOJlVG8ZM4nTaZWj6HDqRacqAlF1B6KNQ00iJKBaaSgk5SGffPqlsy6mfZncbzSADJMS4RlNZdNlzcaa2xuHq5WeiU5sZ3GhDSaAOJOUUvLlNGnK+e9yjINBRpNrGdXGkrKKlbzWdxpKqVEVK6ZrmqU0ynpoihqTIh1Ci6i1YJT1ByimKpDSSUaYZoh6aTQMUtNJlYGliGdazQCNIKlTTKWClBZOVSDlOaoqiJ04g8s0m8OPaqGk9IUaTjWDVHEnGmV81crJUreazuNNPWeqlarMXKNSNNEXo1OhUQ+p6p09T15DTitGplPVVD05UhJoESqazRDMgQabDCSAqxLJMEEj05UmqlAoCD04k4VHmgB4XsMyBZXBEyqaCgk2qIqKiDIVpplGmiL05UaemiL09Z6etURehGnqohXyEp1AaXKeolOVURZys9VpojTQiU9aoUC0SkGVh6VGogVAJggkcqtQZqVaIk4qHngB43rBkEFAg0F6EnpqUaTNEM0mRDOVI1URWnqNPTVF6NRKemiKFTo1KFp6XUTopaSnrPT00RpqpWWqlNG40GpnRytVmHppMgyASABAmCMoKiFcpOAAPI9IAJIzSaB6aQUuU0HpCj1I0pWhOjUDPU2lqpi9Gpg1URYTp6aIrU0aNShSnKmlopjTRqNPTRGmqlZSqlazRuNNOVGjWqzF6NTpmiKoTo1VRQSClHKhUQcQAeV6QAEknoIJQSEooaWjTVFApQaIrQWjSjKgBDRqaFVFjU6NVUXo1I00RVTRoSGnqQKVynKgSmiNJVay1UrWaNxpp6jRrVZi9NB6aIoEElHKlXJEcYAed3AASBUBIgAyQAEgcoBRgAgABIiACwDTCI09AIGjQEipSmEsGmAkcoAOBUqgGmQYDWA5TgBBq5AIf/Z')",
    backgroundSize: "cover",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    padding: "30px",
    borderRadius: "10px",
  };

  const inputStyle = {
    width: "60vh",
    height: "8vh",
    borderRadius: "20px",
    marginBottom: "10px",
    padding: 8,
  };

  const buttonStyle = {
    width: "60vh",
    height: "8vh",
    borderRadius: "20px",
    backgroundColor: "#6200ea",
    color: "white",
    border: "none",
    fontSize: 15,
  };

  return (
    <div style={backgroundStyle}>
      <form style={formStyle}>
        <div className="d-flex flex-column mb-3" style={{ alignItems: "center", justifyContent: "center" }}>
          <PersonAddIcon sx={{ fontSize: "40px", marginBottom: 3, backgroundColor: "white", borderRadius: 5 }} />
          <h2 style={{ color: "white" }}>Sign Up</h2>
        </div>
        <div className="form-group">
          <input
            className="form-control"
            style={inputStyle}
            type="email"
            name="email"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="password"
            name="password"
            style={inputStyle}
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="password"
            name="confirmPassword"
            style={inputStyle}
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="d-flex justify-content-center">
          <button type="button" style={buttonStyle} onClick={handleSignup}>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
