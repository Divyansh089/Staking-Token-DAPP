import React from "react";

const ClickButton = ({ title, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      style={{
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        height: "40px",
        padding: "0 24px",
        borderRadius: "10px",
        border: "2px solid rgba(255, 255, 255, 0.3)",
        background: "linear-gradient(135deg, #572c7c 0%, #572c7c 50%, #a034fa 100%)",
        fontSize: "12px",
        color: "#fff",
        textTransform: "uppercase",
        fontWeight: "500",
        cursor: "pointer",
        fontFamily: "'Manrope', sans-serif",
        whiteSpace: "nowrap",
      }}
    >
      {title}
    </button>
  );
};

export default ClickButton;
