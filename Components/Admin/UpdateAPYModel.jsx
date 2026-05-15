import React, { useState } from "react";
import { IoMdClose } from "../ReactICON/index";

const UpdateAPYModel = ({ setShowUpdateAPY, modifyPool, poolIndex }) => {
  const [newAPY, setNewAPY] = useState("");

  return (
    <div className="new-loader-wrapper" style={{ background: "rgba(22,20,42,0.9)" }}
      onClick={() => setShowUpdateAPY(false)}>
      <div className="invest" style={{ maxWidth: "420px", width: "90%", margin: "0 auto", position: "relative" }}
        onClick={(e) => e.stopPropagation()}>
        <button onClick={() => setShowUpdateAPY(false)} style={{
          position: "absolute", top: "20px", right: "20px", color: "#fff",
          fontSize: "24px", cursor: "pointer", background: "none", border: "none",
        }}><IoMdClose /></button>
        <h3 className="invest__title">Update APY</h3>
        <p className="invest__text" style={{ marginTop: "8px" }}>
          Pool #{poolIndex}
        </p>
        <div style={{ width: "100%", marginTop: "30px" }}>
          <label style={{ color: "#d0d0d0", fontSize: "14px", marginBottom: "8px", display: "block" }}>
            New APY (%)
          </label>
          <input type="number" placeholder="e.g., 25" value={newAPY}
            onChange={(e) => setNewAPY(e.target.value)}
            style={{
              width: "100%", height: "50px", borderRadius: "10px",
              border: "2px solid rgba(255,255,255,0.05)",
              background: "linear-gradient(150deg,rgba(255,255,255,0.03) 0%,rgba(255,255,255,0.01) 100%)",
              color: "#fff", padding: "0 20px", fontSize: "14px", fontFamily: "'Manrope', sans-serif",
            }} />
        </div>
        <button onClick={() => { modifyPool(poolIndex, newAPY); setShowUpdateAPY(false); }}
          className="hero__btn" style={{ width: "100%", marginTop: "20px" }}>
          UPDATE APY
        </button>
      </div>
    </div>
  );
};

export default UpdateAPYModel;
