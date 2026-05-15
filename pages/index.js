import React, { useState, useEffect } from "react";
import { useAccount } from "wagmi";
import {
  Header, Footer, HeroSection, Pools, PoolsModel,
  WithdrawModal, Withdraw, Partners, Statistics,
  Token, Loader, Notification, ICOSale, Contact, Ask,
} from "../Components/index";
import {
  CONTRACT_DATA, deposit, withdraw, claimReward, BUY_TOKEN, addTokenMetaMask,
} from "../Context/index";

const Home = () => {
  const { address } = useAccount();
  const [loader, setLoader] = useState(false);
  const [contractData, setContractData] = useState(null);
  const [selectedPool, setSelectedPool] = useState(null);
  const [showPoolModel, setShowPoolModel] = useState(false);
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [showICO, setShowICO] = useState(false);
  const [poolIndex, setPoolIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      if (address) {
        setLoader(true);
        const data = await CONTRACT_DATA(address);
        setContractData(data);
        setLoader(false);
      }
    };
    fetchData();
  }, [address]);

  return (
    <div className="body--home">
      <Header />

      {loader && <Loader />}

      <HeroSection
        poolData={contractData?.poolInfoArray}
        totalStaked={contractData?.totalDepositedAmount}
        rewardToken={contractData?.rewardToken}
        depositToken={contractData?.depositToken}
      />

      <Statistics
        depositToken={contractData?.depositToken}
        rewardToken={contractData?.rewardToken}
        poolData={contractData?.poolInfoArray}
        totalStaked={contractData?.totalDepositedAmount}
        contractTokenBalance={contractData?.contractTokenBalance}
      />

      <Pools
        poolData={contractData?.poolInfoArray}
        setSelectedPool={(pool) => {
          const idx = contractData?.poolInfoArray?.indexOf(pool);
          setPoolIndex(idx >= 0 ? idx : 0);
          setSelectedPool(pool);
        }}
        setShowPoolModel={setShowPoolModel}
      />

      <Token
        depositToken={contractData?.depositToken}
        rewardToken={contractData?.rewardToken}
      />

      <Withdraw
        poolData={contractData?.poolInfoArray}
        setSelectedPool={setSelectedPool}
        setShowWithdrawModal={setShowWithdrawModal}
        claimReward={claimReward}
      />

      <Notification notifications={contractData?.notifications} />

      <Partners />
      <Ask />
      <Contact />
      <Footer />

      {showPoolModel && selectedPool && (
        <PoolsModel
          pool={selectedPool}
          deposit={deposit}
          setShowPoolModel={setShowPoolModel}
          poolIndex={poolIndex}
        />
      )}

      {showWithdrawModal && selectedPool && (
        <WithdrawModal
          pool={selectedPool}
          withdraw={withdraw}
          setShowWithdrawModal={setShowWithdrawModal}
        />
      )}

      {showICO && (
        <ICOSale setShowICO={setShowICO} BUY_TOKEN={BUY_TOKEN} />
      )}
    </div>
  );
};

export default Home;
