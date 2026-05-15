import React from "react";
import { SHORTEN_ADDRESS, copyAddress } from "../../Context/index";
import { FaRegCopy } from "../ReactICON/index";
import { addTokenMetaMask } from "../../Context/index";
import ButtonCmp from "./RegularComp/ButtonCmp";

const Token = ({ depositToken, rewardToken }) => {
  return (
    <div>
      <h3 style={{ color: "#fff", fontSize: "24px", fontWeight: "300", marginBottom: "24px" }}>
        Token Details
      </h3>

      <div className="row">
        <div className="col-12 col-lg-6">
          <div
            style={{
              borderRadius: "10px",
              border: "2px solid rgba(255, 255, 255, 0.05)",
              background: "linear-gradient(150deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
              backdropFilter: "blur(10px)",
              padding: "30px",
              marginBottom: "24px",
            }}
          >
            <h4 style={{ color: "#fff", fontSize: "18px", fontWeight: "400", marginBottom: "20px" }}>
              Deposit Token
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { label: "Name", value: depositToken?.name },
                { label: "Symbol", value: depositToken?.symbol },
                { label: "Total Supply", value: depositToken?.totalSupply },
                { label: "Balance", value: depositToken?.balance },
                { label: "Contract Balance", value: depositToken?.contractTokenBalance },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "8px" }}>
                  <span style={{ color: "#d0d0d0", fontSize: "14px" }}>{item.label}</span>
                  <span style={{ color: "#fff", fontSize: "14px" }}>{item.value || "N/A"}</span>
                </div>
              ))}
            </div>
            {depositToken?.address && (
              <div
                style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "16px", cursor: "pointer" }}
                onClick={() => copyAddress(depositToken?.address)}
              >
                <span style={{ color: "#20be60", fontSize: "12px" }}>
                  {SHORTEN_ADDRESS(depositToken?.address)}
                </span>
                <FaRegCopy style={{ color: "#d0d0d0", fontSize: "10px" }} />
              </div>
            )}
            <ButtonCmp
              title="ADD TO METAMASK"
              handleClick={() => addTokenMetaMask()}
            />
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div
            style={{
              borderRadius: "10px",
              border: "2px solid rgba(255, 255, 255, 0.05)",
              background: "linear-gradient(150deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
              backdropFilter: "blur(10px)",
              padding: "30px",
              marginBottom: "24px",
            }}
          >
            <h4 style={{ color: "#fff", fontSize: "18px", fontWeight: "400", marginBottom: "20px" }}>
              Reward Token
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { label: "Name", value: rewardToken?.name },
                { label: "Symbol", value: rewardToken?.symbol },
                { label: "Total Supply", value: rewardToken?.totalSupply },
                { label: "Balance", value: rewardToken?.balance },
                { label: "Contract Balance", value: rewardToken?.contractTokenBalance },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "8px" }}>
                  <span style={{ color: "#d0d0d0", fontSize: "14px" }}>{item.label}</span>
                  <span style={{ color: "#fff", fontSize: "14px" }}>{item.value || "N/A"}</span>
                </div>
              ))}
            </div>
            {rewardToken?.address && (
              <div
                style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "16px", cursor: "pointer" }}
                onClick={() => copyAddress(rewardToken?.address)}
              >
                <span style={{ color: "#4399fc", fontSize: "12px" }}>
                  {SHORTEN_ADDRESS(rewardToken?.address)}
                </span>
                <FaRegCopy style={{ color: "#d0d0d0", fontSize: "10px" }} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Token;
