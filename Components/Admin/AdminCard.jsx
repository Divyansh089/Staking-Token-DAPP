import React from "react";
import { SHORTEN_ADDRESS, copyAddress } from "../../Context/index";
import { FaRegCopy } from "../ReactICON/index";

const AdminCard = ({ name, value, address, icon }) => {
  return (
    <div
      style={{
        borderRadius: "10px",
        border: "2px solid rgba(255, 255, 255, 0.05)",
        background: "linear-gradient(150deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
        backdropFilter: "blur(10px)",
        padding: "24px",
        marginBottom: "16px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <p style={{ color: "#d0d0d0", fontSize: "14px", marginBottom: "8px" }}>
            {name}
          </p>
          <p style={{ color: "#fff", fontSize: "24px", fontWeight: "400", margin: 0 }}>
            {value}
          </p>
        </div>
        {icon && (
          <span style={{ color: "#a034fa", fontSize: "32px" }}>{icon}</span>
        )}
      </div>
      {address && (
        <div
          style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "12px", cursor: "pointer" }}
          onClick={() => copyAddress(address)}
        >
          <span style={{ color: "#20be60", fontSize: "12px" }}>
            {SHORTEN_ADDRESS(address)}
          </span>
          <FaRegCopy style={{ color: "#d0d0d0", fontSize: "10px" }} />
        </div>
      )}
    </div>
  );
};

export default AdminCard;
