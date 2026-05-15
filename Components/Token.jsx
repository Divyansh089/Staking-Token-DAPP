import React from "react";
import { SHORTEN_ADDRESS, copyAddress } from "../Context/index";
import { FaRegCopy } from "./ReactICON/index";

const ETHERSCAN_URL = "https://holesky.etherscan.io/address/";

const Token = ({ depositToken, rewardToken }) => {
  return (
    <section className="section" id="crypto">
      <div className="container">
        <div className="section__title">
          <h2>Block Explorer</h2>
          <p>{ETHERSCAN_URL}</p>
        </div>

        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="invest" style={{ marginTop: "24px" }}>
              <h3 className="invest__title">Stake Token Details</h3>
              <p className="invest__text">
                Stake Token stats Crypto King Best return on your investment
              </p>

              <table className="invest__table" style={{ marginTop: "20px" }}>
                <thead>
                  <tr>
                    <th>Token</th>
                    <th style={{ textAlign: "right" }}>Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ color: "#d0d0d0" }}>Name</td>
                    <td style={{ textAlign: "right" }}>
                      {depositToken?.name || "@theblockchaincoders"}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ color: "#d0d0d0" }}>Symbol</td>
                    <td style={{ textAlign: "right" }}>
                      {depositToken?.symbol || "TBC"}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ color: "#d0d0d0" }}>Total Supply</td>
                    <td style={{ textAlign: "right" }}>
                      {depositToken?.totalSupply
                        ? `${Number(depositToken.totalSupply).toFixed(1)} TBC`
                        : "N/A"}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ color: "#d0d0d0" }}>Total Stake</td>
                    <td style={{ textAlign: "right" }}>
                      {depositToken?.contractTokenBalance
                        ? `${depositToken.contractTokenBalance} TBC`
                        : "N/A"}
                    </td>
                  </tr>
                </tbody>
              </table>

              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "20px" }}>
                <a
                  href={`${ETHERSCAN_URL}${depositToken?.address}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="invest__link"
                >
                  Explorer Token
                </a>
                <button
                  onClick={() => copyAddress(depositToken?.address)}
                  style={{
                    background: "linear-gradient(135deg, #572c7c 0%, #a034fa 100%)",
                    border: "none",
                    borderRadius: "8px",
                    width: "36px",
                    height: "36px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    color: "#fff",
                  }}
                >
                  <FaRegCopy />
                </button>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="invest" style={{ marginTop: "24px" }}>
              <h3 className="invest__title">Reward Token Details</h3>
              <p className="invest__text">
                Reward Token information for staking yields
              </p>

              <table className="invest__table" style={{ marginTop: "20px" }}>
                <thead>
                  <tr>
                    <th>Token</th>
                    <th style={{ textAlign: "right" }}>Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ color: "#d0d0d0" }}>Name</td>
                    <td style={{ textAlign: "right" }}>
                      {rewardToken?.name || "@theblockchaincoders"}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ color: "#d0d0d0" }}>Symbol</td>
                    <td style={{ textAlign: "right" }}>
                      {rewardToken?.symbol || "TBC"}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ color: "#d0d0d0" }}>Total Supply</td>
                    <td style={{ textAlign: "right" }}>
                      {rewardToken?.totalSupply
                        ? `${Number(rewardToken.totalSupply).toFixed(1)} ${rewardToken.symbol}`
                        : "N/A"}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ color: "#d0d0d0" }}>Balance</td>
                    <td style={{ textAlign: "right" }}>
                      {rewardToken?.balance
                        ? `${Number(rewardToken.balance).toFixed(4)} ${rewardToken.symbol}`
                        : "N/A"}
                    </td>
                  </tr>
                </tbody>
              </table>

              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "20px" }}>
                <a
                  href={`${ETHERSCAN_URL}${rewardToken?.address}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="invest__link"
                >
                  Explorer Token
                </a>
                <button
                  onClick={() => copyAddress(rewardToken?.address)}
                  style={{
                    background: "linear-gradient(135deg, #572c7c 0%, #a034fa 100%)",
                    border: "none",
                    borderRadius: "8px",
                    width: "36px",
                    height: "36px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    color: "#fff",
                  }}
                >
                  <FaRegCopy />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Token;
