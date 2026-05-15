import React from "react";

const ButtonCmp = ({ title, handleClick, icon, style }) => {
  return (
    <button
      onClick={handleClick}
      className="hero__btn"
      style={{
        width: "auto",
        minWidth: "180px",
        marginTop: "20px",
        cursor: "pointer",
        ...style,
      }}
    >
      {icon && <span style={{ marginRight: "8px" }}>{icon}</span>}
      {title}
    </button>
  );
};

export default ButtonCmp;
