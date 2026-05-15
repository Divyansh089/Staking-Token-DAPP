import React, { useState } from "react";
import InputField from "./RegularComp/InputField";
import ButtonCmp from "./RegularComp/ButtonCmp";

const Transfer = ({ transferToken }) => {
  const [transferData, setTransferData] = useState({
    amount: "",
    address: "",
  });

  return (
    <div>
      <h3 style={{ color: "#fff", fontSize: "24px", fontWeight: "300", marginBottom: "24px" }}>
        Transfer Tokens
      </h3>

      <div
        style={{
          borderRadius: "10px",
          border: "2px solid rgba(255, 255, 255, 0.05)",
          background: "linear-gradient(150deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
          backdropFilter: "blur(10px)",
          padding: "30px",
        }}
      >
        <InputField
          title="Token Amount"
          placeholder="Enter amount"
          type="number"
          handleChange={(e) =>
            setTransferData({ ...transferData, amount: e.target.value })
          }
        />
        <InputField
          title="Recipient Address"
          placeholder="0x..."
          type="text"
          handleChange={(e) =>
            setTransferData({ ...transferData, address: e.target.value })
          }
        />

        <ButtonCmp
          title="TRANSFER TOKEN"
          handleClick={() => transferToken(transferData.amount, transferData.address)}
        />
      </div>
    </div>
  );
};

export default Transfer;
