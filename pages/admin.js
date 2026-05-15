import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { Header, Footer, Loader, ICOSale } from "../Components/index";
import Admin from "../Components/Admin/Admin";
import Auth from "../Components/Admin/Auth";
import {
  CONTRACT_DATA, transferToken, createPool, sweep, modifyPool,
  BUY_TOKEN, TOKEN_WITHDRAW, UPDATE_TOKEN, UPDATE_TOKEN_PRICE,
} from "../Context/index";

const ADMIN_ADDRESS = process.env.NEXT_PUBLIC_ADMIN_ADDRESS;

const AdminPage = () => {
  const { address } = useAccount();
  const [loader, setLoader] = useState(false);
  const [checkAdmin, setCheckAdmin] = useState(false);
  const [contractData, setContractData] = useState(null);

  useEffect(() => {
    if (address) {
      const fetchData = async () => {
        setLoader(true);
        const data = await CONTRACT_DATA(address);
        setContractData(data);
        if (data?.contractOwner === address.toLowerCase()) {
          setCheckAdmin(true);
        }
        setLoader(false);
      };
      fetchData();
    }
  }, [address]);

  if (!address) return <Auth />;

  return (
    <div>
      <Header />
      {loader && <Loader />}
      {checkAdmin ? (
        <Admin
          poolData={contractData?.poolInfoArray}
          transferToken={transferToken}
          createPool={createPool}
          sweep={sweep}
          modifyPool={modifyPool}
          contractAddress={contractData?.contractAddress}
          contractTokenBalance={contractData?.contractTokenBalance}
          depositToken={contractData?.depositToken}
          rewardToken={contractData?.rewardToken}
          notifications={contractData?.notifications}
          address={address}
          BUY_TOKEN={BUY_TOKEN}
          TOKEN_WITHDRAW={TOKEN_WITHDRAW}
          UPDATE_TOKEN={UPDATE_TOKEN}
          UPDATE_TOKEN_PRICE={UPDATE_TOKEN_PRICE}
        />
      ) : (
        <div style={{
          minHeight: "100vh", display: "flex", justifyContent: "center",
          alignItems: "center", flexDirection: "column", paddingTop: "100px",
        }}>
          <h2 style={{ color: "#fff", fontSize: "24px", fontWeight: "300", marginBottom: "16px" }}>
            Access Denied
          </h2>
          <p style={{ color: "#d0d0d0", fontSize: "14px" }}>
            Only the contract owner can access the admin dashboard.
          </p>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default AdminPage;
