import React from "react";

const Statistics = ({ depositToken, rewardToken, poolData, totalStaked, contractTokenBalance }) => {
  return (
    <section className="section" id="statistics">
      <div className="container">
        <div className="section__title">
          <h2>Statistics Overview</h2>
          <p>Real-time staking statistics from the smart contract</p>
        </div>

        <div className="row">
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="stats">
              <span className="stats__value">
                {poolData?.length || 0}
              </span>
              <p className="stats__name">Total Pools</p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="stats">
              <span className="stats__value">
                {totalStaked ? Number(totalStaked).toFixed(1) : "0.0"}
              </span>
              <p className="stats__name">Total Staked</p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="stats">
              <span className="stats__value">
                {contractTokenBalance
                  ? Number(contractTokenBalance).toFixed(1)
                  : "0.0"}
              </span>
              <p className="stats__name">Available Supply</p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="stats">
              <span className="stats__value">
                {depositToken?.balance
                  ? Number(depositToken.balance).toFixed(1)
                  : "0.0"}
              </span>
              <p className="stats__name">Your Balance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
