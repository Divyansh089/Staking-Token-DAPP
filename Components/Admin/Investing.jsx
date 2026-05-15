import React from "react";

const Investing = ({ poolData }) => {
  return (
    <div>
      <h3 style={{ color: "#fff", fontSize: "24px", fontWeight: "300", marginBottom: "24px" }}>
        Investment Overview
      </h3>

      <div className="row">
        {poolData?.map((pool, index) => (
          <div className="col-12 col-md-6 col-lg-4" key={index}>
            <div
              style={{
                borderRadius: "10px",
                border: "2px solid rgba(255, 255, 255, 0.05)",
                background: "linear-gradient(150deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
                backdropFilter: "blur(10px)",
                padding: "24px",
                marginBottom: "24px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                <h5 style={{ color: "#fff", fontSize: "16px", fontWeight: "400", margin: 0 }}>
                  Pool #{index}
                </h5>
                <span style={{ color: "#20be60", fontSize: "20px", fontWeight: "400" }}>
                  {pool.apy}%
                </span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "#d0d0d0", fontSize: "13px" }}>Deposited</span>
                  <span style={{ color: "#fff", fontSize: "13px" }}>{pool.depositedAmount}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "#d0d0d0", fontSize: "13px" }}>Lock</span>
                  <span style={{ color: "#fff", fontSize: "13px" }}>{pool.lockDays} days</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "#d0d0d0", fontSize: "13px" }}>Token</span>
                  <span style={{ color: "#fff", fontSize: "13px" }}>
                    {pool.depositToken?.symbol || "TBC"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Investing;
