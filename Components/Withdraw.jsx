import React from "react";

const Withdraw = ({ poolData, setSelectedPool, setShowWithdrawModal, claimReward }) => {
  return (
    <section className="section" id="withdraw">
      <div className="container">
        <div className="section__title">
          <h2>Your Investments</h2>
          <p>Manage your staked tokens, withdraw or claim rewards</p>
        </div>

        <div className="row">
          {poolData?.map((pool, index) => {
            if (!pool.amount || Number(pool.amount) === 0) return null;
            return (
              <div className="col-12 col-md-6 col-lg-4" key={index}>
                <div className="invest" style={{ marginTop: "24px" }}>
                  <h3 className="invest__title">
                    Pool #{index} - {pool.depositToken?.symbol || "Token"}
                  </h3>

                  <table className="invest__table" style={{ marginTop: "20px" }}>
                    <tbody>
                      <tr>
                        <td style={{ color: "#d0d0d0" }}>Your Stake</td>
                        <td style={{ textAlign: "right" }}>
                          {pool.amount} {pool.depositToken?.symbol}
                        </td>
                      </tr>
                      <tr>
                        <td style={{ color: "#d0d0d0" }}>Pending Reward</td>
                        <td style={{ color: "#20be60", textAlign: "right" }}>
                          {pool.userReward} {pool.rewardToken?.symbol}
                        </td>
                      </tr>
                      <tr>
                        <td style={{ color: "#d0d0d0" }}>Lock Until</td>
                        <td style={{ textAlign: "right" }}>{pool.lockUntil}</td>
                      </tr>
                      <tr>
                        <td style={{ color: "#d0d0d0" }}>APY</td>
                        <td style={{ color: "#20be60", textAlign: "right" }}>
                          {pool.apy}%
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <div
                    style={{
                      display: "flex",
                      gap: "12px",
                      width: "100%",
                      marginTop: "20px",
                    }}
                  >
                    <button
                      className="section__btn"
                      style={{ flex: 1, height: "46px" }}
                      onClick={() => {
                        setSelectedPool({ ...pool, poolIndex: index });
                        setShowWithdrawModal(true);
                      }}
                    >
                      WITHDRAW
                    </button>
                    <button
                      className="section__btn section__btn--light"
                      style={{ flex: 1, height: "46px" }}
                      onClick={() => claimReward(index)}
                    >
                      CLAIM
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

          {(!poolData || poolData.every((p) => !p.amount || Number(p.amount) === 0)) && (
            <div className="col-12" style={{ textAlign: "center", padding: "60px 0" }}>
              <p style={{ color: "#d0d0d0", fontSize: "18px" }}>
                You don&apos;t have any active stakes. Deposit tokens to start earning.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Withdraw;
