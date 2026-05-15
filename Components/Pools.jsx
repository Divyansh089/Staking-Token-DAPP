import React from "react";
import { SHORTEN_ADDRESS, copyAddress } from "../Context/index";
import { FaRegCopy } from "./ReactICON/index";

const Pools = ({ poolData, setSelectedPool, setShowPoolModel }) => {
  return (
    <section className="section section--pb" id="pools">
      <div className="container">
        <div className="section__title">
          <h2>Staking Pools</h2>
          <p>Select a pool to stake your tokens and start earning rewards</p>
        </div>

        <div className="row">
          {poolData?.map((pool, index) => (
            <div className="col-12 col-md-6 col-lg-4" key={index}>
              <div
                className="invest"
                style={{ cursor: "pointer", marginTop: "24px" }}
                onClick={() => {
                  setSelectedPool(pool);
                  setShowPoolModel(true);
                }}
              >
                <h3 className="invest__title">{pool.depositToken?.symbol || "Token"}</h3>
                <p className="invest__text">Pool #{index}</p>

                <table className="invest__table" style={{ marginTop: "20px" }}>
                  <tbody>
                    <tr>
                      <td style={{ color: "#d0d0d0" }}>Deposit Token</td>
                      <td style={{ textAlign: "right" }}>
                        <span
                          style={{ color: "#20be60", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "6px" }}
                          onClick={(e) => {
                            e.stopPropagation();
                            copyAddress(pool.depositTokenAddress);
                          }}
                        >
                          {SHORTEN_ADDRESS(pool.depositTokenAddress)} {pool.depositToken?.symbol}
                          <FaRegCopy />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ color: "#d0d0d0" }}>Deposited</td>
                      <td style={{ color: "#20be60", textAlign: "right" }}>
                        {pool.depositedAmount} {pool.depositToken?.symbol}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ color: "#d0d0d0" }}>APY</td>
                      <td style={{ color: "#20be60", textAlign: "right" }}>
                        {pool.apy} %
                      </td>
                    </tr>
                    <tr>
                      <td style={{ color: "#d0d0d0" }}>Lock Days</td>
                      <td style={{ textAlign: "right" }}>{pool.lockDays} days</td>
                    </tr>
                  </tbody>
                </table>

                <div style={{ marginTop: "auto", paddingTop: "20px", width: "100%" }}>
                  <button
                    className="section__btn"
                    style={{ width: "100%", height: "50px" }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPool(pool);
                      setShowPoolModel(true);
                    }}
                  >
                    STAKE
                  </button>
                </div>
              </div>
            </div>
          ))}

          {(!poolData || poolData.length === 0) && (
            <div className="col-12" style={{ textAlign: "center", padding: "60px 0" }}>
              <p style={{ color: "#d0d0d0", fontSize: "18px" }}>
                No staking pools available yet. Connect your wallet to see pools.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Pools;
