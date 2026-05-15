import React, { useState, useEffect } from "react";
import { IoMdClose } from "./ReactICON/index";
import { LOAD_TOKEN_TCO } from "../Context/constants";

const ICOSale = ({ setShowICO, BUY_TOKEN }) => {
  const [tokenDetails, setTokenDetails] = useState(null);
  const [amount, setAmount] = useState("");

  useEffect(() => {
    const loadData = async () => {
      const data = await LOAD_TOKEN_TCO();
      setTokenDetails(data);
    };
    loadData();
  }, []);

  return (
    <div
      className="new-loader-wrapper"
      style={{ background: "rgba(22, 20, 42, 0.9)" }}
      onClick={() => setShowICO(false)}
    >
      <div
        className="invest"
        style={{
          maxWidth: "520px",
          width: "90%",
          margin: "0 auto",
          position: "relative",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setShowICO(false)}
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

        <h3 className="invest__title">Token ICO Sale</h3>
        <p className="invest__text" style={{ marginTop: "8px" }}>
          Purchase {tokenDetails?.symbol || "TBC"} tokens at the current ICO price
        </p>

        <div style={{ width: "100%", marginTop: "30px" }}>
          <table className="invest__table">
            <thead>
              <tr>
                <th>Property</th>
                <th style={{ textAlign: "right" }}>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ color: "#d0d0d0" }}>Token Name</td>
                <td style={{ textAlign: "right" }}>{tokenDetails?.name || "N/A"}</td>
              </tr>
              <tr>
                <td style={{ color: "#d0d0d0" }}>Symbol</td>
                <td style={{ textAlign: "right" }}>{tokenDetails?.symbol || "N/A"}</td>
              </tr>
              <tr>
                <td style={{ color: "#d0d0d0" }}>Price</td>
                <td style={{ color: "#20be60", textAlign: "right" }}>
                  {tokenDetails?.tokenPrice || "N/A"} ETH
                </td>
              </tr>
              <tr>
                <td style={{ color: "#d0d0d0" }}>Available</td>
                <td style={{ textAlign: "right" }}>
                  {tokenDetails?.tokenBal
                    ? Number(tokenDetails.tokenBal).toFixed(2)
                    : "N/A"}{" "}
                  {tokenDetails?.symbol}
                </td>
              </tr>
              <tr>
                <td style={{ color: "#d0d0d0" }}>Supply</td>
                <td style={{ textAlign: "right" }}>
                  {tokenDetails?.supply || "N/A"} {tokenDetails?.symbol}
                </td>
              </tr>
              <tr>
                <td style={{ color: "#d0d0d0" }}>Sold Tokens</td>
                <td style={{ textAlign: "right" }}>
                  {tokenDetails?.soldTokens || "0"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style={{ width: "100%", marginTop: "30px" }}>
          <label style={{ color: "#d0d0d0", fontSize: "14px", marginBottom: "8px", display: "block" }}>
            Amount of tokens to buy
          </label>
          <input
            type="number"
            placeholder="Enter token amount"
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
          {amount && tokenDetails?.tokenPrice && (
            <p style={{ color: "#d0d0d0", fontSize: "12px", marginTop: "8px" }}>
              Cost: {(Number(amount) * Number(tokenDetails.tokenPrice)).toFixed(6)} ETH
            </p>
          )}
        </div>

        <button
          onClick={() => {
            if (amount && Number(amount) > 0) {
              BUY_TOKEN(amount);
              setShowICO(false);
            }
          }}
          className="hero__btn"
          style={{ width: "100%", marginTop: "20px" }}
        >
          BUY TOKEN
        </button>
      </div>
    </div>
  );
};

export default ICOSale;
