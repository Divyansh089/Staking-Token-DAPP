import React from "react";
import { SHORTEN_ADDRESS, copyAddress } from "../../Context/index";
import { FaRegCopy, FaEdit } from "../ReactICON/index";
import ClickButton from "./RegularComp/ClickButton";

const Staking = ({ poolData, setShowUpdateAPY, setSelectedPoolIndex }) => {
  return (
    <div>
      <h3 style={{ color: "#fff", fontSize: "24px", fontWeight: "300", marginBottom: "24px" }}>
        Staking Pool Management
      </h3>

      <div
        className="scrollable-div"
        style={{
          borderRadius: "10px",
          border: "2px solid rgba(255, 255, 255, 0.05)",
          background: "linear-gradient(150deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
          backdropFilter: "blur(10px)",
          padding: "30px",
          overflowX: "auto",
        }}
      >
        {poolData && poolData.length > 0 ? (
          <table style={{ width: "100%", minWidth: "800px", borderSpacing: 0 }}>
            <thead>
              <tr style={{ borderBottom: "2px solid rgba(255,255,255,0.05)" }}>
                <th style={{ color: "#d0d0d0", fontSize: "12px", fontWeight: "400", padding: "16px 12px", textAlign: "left", textTransform: "uppercase" }}>Pool</th>
                <th style={{ color: "#d0d0d0", fontSize: "12px", fontWeight: "400", padding: "16px 12px", textAlign: "left", textTransform: "uppercase" }}>Deposit Token</th>
                <th style={{ color: "#d0d0d0", fontSize: "12px", fontWeight: "400", padding: "16px 12px", textAlign: "left", textTransform: "uppercase" }}>Reward Token</th>
                <th style={{ color: "#d0d0d0", fontSize: "12px", fontWeight: "400", padding: "16px 12px", textAlign: "left", textTransform: "uppercase" }}>Deposited</th>
                <th style={{ color: "#d0d0d0", fontSize: "12px", fontWeight: "400", padding: "16px 12px", textAlign: "left", textTransform: "uppercase" }}>APY</th>
                <th style={{ color: "#d0d0d0", fontSize: "12px", fontWeight: "400", padding: "16px 12px", textAlign: "left", textTransform: "uppercase" }}>Lock Days</th>
                <th style={{ color: "#d0d0d0", fontSize: "12px", fontWeight: "400", padding: "16px 12px", textAlign: "center", textTransform: "uppercase" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {poolData.map((pool, index) => (
                <tr key={index} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <td style={{ color: "#fff", padding: "16px 12px", fontSize: "14px" }}>#{index}</td>
                  <td style={{ padding: "16px 12px" }}>
                    <span
                      style={{ color: "#20be60", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "4px", fontSize: "13px" }}
                      onClick={() => copyAddress(pool.depositTokenAddress)}
                    >
                      {SHORTEN_ADDRESS(pool.depositTokenAddress)}
                      <FaRegCopy style={{ fontSize: "10px" }} />
                    </span>
                  </td>
                  <td style={{ padding: "16px 12px" }}>
                    <span
                      style={{ color: "#4399fc", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "4px", fontSize: "13px" }}
                      onClick={() => copyAddress(pool.rewardTokenAddress)}
                    >
                      {SHORTEN_ADDRESS(pool.rewardTokenAddress)}
                      <FaRegCopy style={{ fontSize: "10px" }} />
                    </span>
                  </td>
                  <td style={{ color: "#fff", padding: "16px 12px", fontSize: "14px" }}>
                    {pool.depositedAmount}
                  </td>
                  <td style={{ color: "#20be60", padding: "16px 12px", fontSize: "14px" }}>
                    {pool.apy}%
                  </td>
                  <td style={{ color: "#fff", padding: "16px 12px", fontSize: "14px" }}>
                    {pool.lockDays}
                  </td>
                  <td style={{ padding: "16px 12px", textAlign: "center" }}>
                    <ClickButton
                      title="UPDATE APY"
                      handleClick={() => {
                        setSelectedPoolIndex(index);
                        setShowUpdateAPY(true);
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p style={{ color: "#d0d0d0", textAlign: "center", padding: "40px 0" }}>
            No staking pools created yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default Staking;
