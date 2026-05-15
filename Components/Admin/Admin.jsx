import React, { useState } from "react";
import AdminNav from "./AdminNav";
import AdminHead from "./AdminHead";
import Staking from "./Staking";
import ICOToken from "./ICOToken";
import Pool from "./Pool";
import Transfer from "./Transfer";
import Token from "./Token";
import AdminNotification from "./Notification";
import UpdateAPYModel from "./UpdateAPYModel";

const Admin = ({
  poolData, transferToken, createPool, sweep, modifyPool,
  contractAddress, contractTokenBalance, depositToken, rewardToken,
  notifications, address, BUY_TOKEN, TOKEN_WITHDRAW, UPDATE_TOKEN, UPDATE_TOKEN_PRICE,
}) => {
  const [activeTab, setActiveTab] = useState("staking");
  const [showUpdateAPY, setShowUpdateAPY] = useState(false);
  const [selectedPoolIndex, setSelectedPoolIndex] = useState(0);

  const renderContent = () => {
    switch (activeTab) {
      case "staking":
        return <Staking poolData={poolData} setShowUpdateAPY={setShowUpdateAPY} setSelectedPoolIndex={setSelectedPoolIndex} />;
      case "ico":
        return <ICOToken BUY_TOKEN={BUY_TOKEN} TOKEN_WITHDRAW={TOKEN_WITHDRAW} UPDATE_TOKEN={UPDATE_TOKEN} UPDATE_TOKEN_PRICE={UPDATE_TOKEN_PRICE} />;
      case "pool":
        return <Pool createPool={createPool} />;
      case "transfer":
        return <Transfer transferToken={transferToken} />;
      case "token":
        return <Token depositToken={depositToken} rewardToken={rewardToken} />;
      case "notification":
        return <AdminNotification notifications={notifications} />;
      default:
        return <Staking poolData={poolData} setShowUpdateAPY={setShowUpdateAPY} setSelectedPoolIndex={setSelectedPoolIndex} />;
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#16142a", paddingTop: "100px" }}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-3">
            <AdminNav activeTab={activeTab} setActiveTab={setActiveTab} address={address} contractAddress={contractAddress} />
          </div>
          <div className="col-12 col-lg-9">
            <AdminHead contractAddress={contractAddress} poolData={poolData} contractTokenBalance={contractTokenBalance} />
            {renderContent()}
          </div>
        </div>
      </div>
      {showUpdateAPY && (
        <UpdateAPYModel setShowUpdateAPY={setShowUpdateAPY} modifyPool={modifyPool} poolIndex={selectedPoolIndex} />
      )}
    </div>
  );
};

export default Admin;
