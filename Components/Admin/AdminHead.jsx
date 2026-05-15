import React from "react";
import { SHORTEN_ADDRESS, copyAddress } from "../../Context/index";
import { FaRegCopy } from "../ReactICON/index";

const AdminHead = ({ contractAddress, poolData, contractTokenBalance }) => {
  return (
    <div
      style={{
        borderRadius: "10px",
        border: "2px solid rgba(255, 255, 255, 0.05)",
        background: "linear-gradient(150deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
        backdropFilter: "blur(10px)",
        padding: "30px",
        marginBottom: "24px",
        display: "flex",
        flexWrap: "wrap",
        gap: "24px",
        alignItems: "center",
      }}
    >
      <div style={{ flex: "1 1 200px" }}>
        <p style={{ color: "#d0d0d0", fontSize: "12px", marginBottom: "4px" }}>
          Contract Address
        </p>
        <div
          style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}
          onClick={() => copyAddress(contractAddress)}
        >
          <span style={{ color: "#20be60", fontSize: "14px" }}>
            {SHORTEN_ADDRESS(contractAddress)}
          </span>
          <FaRegCopy style={{ color: "#d0d0d0", fontSize: "12px" }} />
        </div>
      </div>

      <div style={{ flex: "0 0 auto", textAlign: "center" }}>
        <p style={{ color: "#d0d0d0", fontSize: "12px", marginBottom: "4px" }}>
          Total Pools
        </p>
        <span style={{ color: "#fff", fontSize: "24px", fontWeight: "400" }}>
          {poolData?.length || 0}
        </span>
      </div>

      <div style={{ flex: "0 0 auto", textAlign: "center" }}>
        <p style={{ color: "#d0d0d0", fontSize: "12px", marginBottom: "4px" }}>
          Contract Token Balance
        </p>
        <span style={{ color: "#20be60", fontSize: "24px", fontWeight: "400" }}>
          {contractTokenBalance
            ? Number(contractTokenBalance).toFixed(2)
            : "0.00"}
        </span>
      </div>
    </div>
  );
};

export default AdminHead;
