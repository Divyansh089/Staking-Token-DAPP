import React from "react";

const HeroSection = ({ poolData, totalStaked, rewardToken, depositToken }) => {
  return (
    <section className="hero" id="staking">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="hero__content">
              <h1 className="hero__title">
                <strong>Stake Your Tokens</strong> and Earn Rewards
              </h1>
              <p className="hero__text">
                Stake your tokens to earn competitive APY rewards. Choose from
                multiple staking pools with different lock periods and reward
                rates. Secure, transparent, and built on smart contracts.
              </p>
              <div className="hero__btns">
                <a href="#pools" className="hero__btn">
                  Start Staking
                </a>
                <a href="#statistics" className="hero__btn hero__btn--light">
                  Learn More
                </a>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="hero__content hero__content--second">
              <div className="row" style={{ width: "100%" }}>
                <div className="col-6">
                  <div className="stats">
                    <span className="stats__value">
                      {poolData?.length || 0}
                    </span>
                    <p className="stats__name">Active Pools</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="stats">
                    <span className="stats__value">
                      {totalStaked
                        ? Number(totalStaked).toFixed(2)
                        : "0.00"}
                    </span>
                    <p className="stats__name">Total Staked</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="stats">
                    <span className="stats__value">
                      {rewardToken?.symbol || "TBC"}
                    </span>
                    <p className="stats__name">Reward Token</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="stats">
                    <span className="stats__value">
                      {depositToken?.balance
                        ? Number(depositToken.balance).toFixed(2)
                        : "0.00"}
                    </span>
                    <p className="stats__name">Your Balance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
