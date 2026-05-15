import React, { useState } from "react";
import { IoMdClose } from "./ReactICON/index";

const PoolsModel = ({ pool, deposit, setShowPoolModel, poolIndex }) => {
  const [amount, setAmount] = useState("");

  const handleDeposit = () => {
    if (!amount || Number(amount) <= 0) return;
    deposit(poolIndex, amount);
    setShowPoolModel(false);
  };

  return (
    <div
      className="new-loader-wrapper"
      style={{ background: "rgba(22, 20, 42, 0.9)" }}
      onClick={() => setShowPoolModel(false)}
    >
      <div
        className="invest"
        style={{
          maxWidth: "500px",
          width: "90%",
          margin: "0 auto",
          position: "relative",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setShowPoolModel(false)}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            color: "#fff",
            fontSize: "24px",
            cursor: "pointer",
            background: "none",
            border: "none",
          }}
        >
          <IoMdClose />
        </button>

        <h3 className="invest__title">
          Stake {pool?.depositToken?.symbol || "Token"}
        </h3>
        <p className="invest__text" style={{ marginTop: "8px" }}>
          Pool APY: <span style={{ color: "#20be60" }}>{pool?.apy}%</span> &bull;
          Lock: <span style={{ color: "#fff" }}>{pool?.lockDays} days</span>
        </p>

        <div style={{ width: "100%", marginTop: "30px" }}>
          <table className="invest__table">
            <tbody>
              <tr>
                <td style={{ color: "#d0d0d0" }}>Your Deposit</td>
                <td style={{ textAlign: "right" }}>
                  {pool?.amount || "0"} {pool?.depositToken?.symbol}
                </td>
              </tr>
              <tr>
                <td style={{ color: "#d0d0d0" }}>Pending Reward</td>
                <td style={{ color: "#20be60", textAlign: "right" }}>
                  {pool?.userReward || "0"} {pool?.rewardToken?.symbol}
                </td>
              </tr>
              <tr>
                <td style={{ color: "#d0d0d0" }}>Lock Until</td>
                <td style={{ textAlign: "right" }}>{pool?.lockUntil}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style={{ width: "100%", marginTop: "30px" }}>
          <label style={{ color: "#d0d0d0", fontSize: "14px", marginBottom: "8px", display: "block" }}>
            Enter Amount
          </label>
          <input
            type="number"
            placeholder="Enter amount to stake"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={{
              width: "100%",
              height: "50px",
              borderRadius: "10px",
              border: "2px solid rgba(255, 255, 255, 0.05)",
              background: "linear-gradient(150deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
              color: "#fff",
              padding: "0 20px",
              fontSize: "14px",
              fontFamily: "'Manrope', sans-serif",
            }}
          />
        </div>

        <button
          onClick={handleDeposit}
          className="hero__btn"
          style={{ width: "100%", marginTop: "20px" }}
        >
          DEPOSIT
        </button>
      </div>
    </div>
  );
};

export default PoolsModel;
