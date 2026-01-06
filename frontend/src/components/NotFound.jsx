import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        background:
          "linear-gradient(135deg, #00bcd4 0%, #3f51b5 40%, #673ab7 100%)",
        color: "white",
      }}
    >
      <div
        style={{
          backdropFilter: "blur(12px)",
          background: "rgba(255,255,255,0.08)",
          padding: "40px 50px",
          borderRadius: "20px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
          maxWidth: "480px",
        }}
      >
        <div style={{ fontSize: "70px" }}>🧭</div>

        <h1
          style={{
            fontSize: "70px",
            marginBottom: "5px",
            letterSpacing: "2px",
          }}
        >
          404
        </h1>

        <h2 style={{ marginTop: "0px" }}>Lost your way, traveler?</h2>

        <p style={{ opacity: 0.9 }}>
          This route isn’t on our map.  
          Maybe the destination moved… or the adventure is somewhere else ✈️
        </p>

        <button
          onClick={() => navigate("/")}
          style={{
            marginTop: "15px",
            padding: "12px 22px",
            borderRadius: "30px",
            border: "none",
            cursor: "pointer",
            fontWeight: 700,
            fontSize: "15px",
            background:
              "linear-gradient(135deg, #ff9800 0%, #ff5722 100%)",
            color: "white",
            boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
            transition: "transform .2s ease, box-shadow .2s ease",
          }}
          onMouseOver={(e) => {
            e.target.style.transform = "translateY(-3px) scale(1.03)";
            e.target.style.boxShadow = "0 14px 35px rgba(0,0,0,0.45)";
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "translateY(0px) scale(1)";
            e.target.style.boxShadow = "0 10px 25px rgba(0,0,0,0.3)";
          }}
        >
        Take Me Home 🏠
        </button>
      </div>
    </div>
  );
};

export default NotFound;
