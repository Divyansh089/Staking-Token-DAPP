import React, { useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Auth = () => {
  return (
    <div style={{
      display: "flex", flexDirection: "column", justifyContent: "center",
      alignItems: "center", minHeight: "100vh", padding: "40px 20px", background: "#16142a",
    }}>
      <div style={{
        borderRadius: "25px 10px 10px 10px", border: "2px solid rgba(255,255,255,0.05)",
        background: "linear-gradient(150deg,rgba(255,255,255,0.03) 0%,rgba(255,255,255,0.01) 100%)",
        padding: "60px 40px", textAlign: "center", maxWidth: "480px", width: "100%",
      }}>
        <img src="img/logo.svg" alt="Crypto King" style={{ height: "50px", marginBottom: "30px" }} />
        <h2 style={{ color: "#fff", fontSize: "24px", fontWeight: "300", marginBottom: "16px" }}>
          Admin Access Required
        </h2>
        <p style={{ color: "#d0d0d0", fontSize: "14px", marginBottom: "30px" }}>
          Connect your admin wallet to access the dashboard
        </p>
        <ConnectButton />
      </div>
    </div>
  );
};

export default Auth;
