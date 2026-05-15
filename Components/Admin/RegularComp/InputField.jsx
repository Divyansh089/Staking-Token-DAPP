import React from "react";

const InputField = ({ title, placeholder, type, handleChange }) => {
  return (
    <div className="invest__group">
      <label className="invest__text" style={{ color: "#d0d0d0", marginBottom: "8px", fontSize: "14px" }}>
        {title}
      </label>
      <input
        type={type || "text"}
        placeholder={placeholder}
        onChange={handleChange}
        className="form__input"
        style={{
          width: "100%",
          height: "50px",
          borderRadius: "10px",
          border: "2px solid rgba(255, 255, 255, 0.05)",
          background: "linear-gradient(150deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
          backdropFilter: "blur(10px)",
          color: "#fff",
          padding: "0 20px",
          fontSize: "14px",
          fontFamily: "'Manrope', sans-serif",
        }}
      />
    </div>
  );
};

export default InputField;
