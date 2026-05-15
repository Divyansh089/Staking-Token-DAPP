import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { Header, Footer, Notification, Loader } from "../Components/index";
import { CONTRACT_DATA } from "../Context/index";

const Activities = () => {
  const { address } = useAccount();
  const [loader, setLoader] = useState(false);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (address) {
        setLoader(true);
        const data = await CONTRACT_DATA(address);
        setNotifications(data?.notifications || []);
        setLoader(false);
      }
    };
    fetchData();
  }, [address]);

  return (
    <div>
      <Header />
      {loader && <Loader />}
      <div style={{ paddingTop: "80px" }}>
        <Notification notifications={notifications} />
      </div>
      <Footer />
    </div>
  );
};

export default Activities;
