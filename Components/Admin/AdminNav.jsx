import React from "react";
import Link from "next/link";
import {
  IoIosApps,
  MdGeneratingTokens,
  FaWallet,
  MdOutlineAttachMoney,
  FaRegCopy,
  MdAdminPanelSettings,
} from "../ReactICON/index";
import { SHORTEN_ADDRESS, copyAddress } from "../../Context/index";

const AdminNav = ({
  activeTab,
  setActiveTab,
  address,
  contractAddress,
}) => {
  const navItems = [
    { name: "Staking", icon: <IoIosApps />, id: "staking" },
    { name: "ICO Token", icon: <MdGeneratingTokens />, id: "ico" },
    { name: "Pool", icon: <FaWallet />, id: "pool" },
    { name: "Transfer", icon: <MdOutlineAttachMoney />, id: "transfer" },
    { name: "Token", icon: <MdGeneratingTokens />, id: "token" },
    { name: "Notification", icon: <MdAdminPanelSettings />, id: "notification" },
  ];

  return (
    <div
      style={{
        borderRadius: "10px",
        border: "2px solid rgba(255, 255, 255, 0.05)",
        background: "linear-gradient(150deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
        backdropFilter: "blur(10px)",
        padding: "30px 20px",
        position: "sticky",
        top: "100px",
      }}
    >
      <div style={{ marginBottom: "24px" }}>
        <Link href="/" style={{ display: "inline-block" }}>
          <img src="img/logo.svg" alt="Admin" style={{ height: "40px" }} />
        </Link>
      </div>

      <div style={{ marginBottom: "24px" }}>
        <p style={{ color: "#d0d0d0", fontSize: "12px", marginBottom: "4px" }}>
          Connected:
        </p>
        <div
          style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}
          onClick={() => copyAddress(address)}
        >
          <span style={{ color: "#20be60", fontSize: "13px" }}>
            {SHORTEN_ADDRESS(address)}
          </span>
          <FaRegCopy style={{ color: "#d0d0d0", fontSize: "12px" }} />
        </div>
      </div>

      <nav>
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              width: "100%",
              padding: "12px 16px",
              marginBottom: "4px",
              borderRadius: "8px",
              border: "none",
              background: activeTab === item.id
                ? "linear-gradient(135deg, #572c7c 0%, #a034fa 100%)"
                : "transparent",
              color: activeTab === item.id ? "#fff" : "#d0d0d0",
              fontSize: "14px",
              fontWeight: activeTab === item.id ? "500" : "400",
              cursor: "pointer",
              fontFamily: "'Manrope', sans-serif",
              transition: "all 0.3s ease",
            }}
          >
            <span style={{ fontSize: "18px" }}>{item.icon}</span>
            {item.name}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default AdminNav;
