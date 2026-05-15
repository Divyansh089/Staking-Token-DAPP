import React from "react";

const PupUpButton = ({ title, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "50px",
        borderRadius: "10px",
        border: "2px solid rgba(255, 255, 255, 0.3)",
        background: "linear-gradient(135deg, #572c7c 0%, #572c7c 50%, #a034fa 100%)",
        fontSize: "14px",
        color: "#fff",
        textTransform: "uppercase",
        fontWeight: "500",
        cursor: "pointer",
        fontFamily: "'Manrope', sans-serif",
        marginTop: "16px",
      }}
    >
      {title}
    </button>
  );
};

export default PupUpButton;
