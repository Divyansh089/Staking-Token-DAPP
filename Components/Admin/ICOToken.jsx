import React, { useState, useEffect } from "react";
import InputField from "./RegularComp/InputField";
import ButtonCmp from "./RegularComp/ButtonCmp";
import { LOAD_TOKEN_TCO } from "../../Context/constants";

const ICOToken = ({ BUY_TOKEN, TOKEN_WITHDRAW, UPDATE_TOKEN, UPDATE_TOKEN_PRICE }) => {
  const [tokenDetails, setTokenDetails] = useState(null);
  const [newPrice, setNewPrice] = useState("");
  const [newToken, setNewToken] = useState("");

  useEffect(() => {
    const loadData = async () => {
      const data = await LOAD_TOKEN_TCO();
      setTokenDetails(data);
    };
    loadData();
  }, []);

  return (
    <div>
      <h3 style={{ color: "#fff", fontSize: "24px", fontWeight: "300", marginBottom: "24px" }}>
        ICO Token Management
      </h3>

      <div className="row">
        <div className="col-12 col-lg-6">
          <div
            style={{
              borderRadius: "10px",
              border: "2px solid rgba(255, 255, 255, 0.05)",
              background: "linear-gradient(150deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
              backdropFilter: "blur(10px)",
              padding: "30px",
              marginBottom: "24px",
            }}
          >
            <h4 style={{ color: "#fff", fontSize: "18px", fontWeight: "400", marginBottom: "20px" }}>
              Token Details
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { label: "Name", value: tokenDetails?.name },
                { label: "Symbol", value: tokenDetails?.symbol },
                { label: "Price", value: tokenDetails?.tokenPrice ? `${tokenDetails.tokenPrice} ETH` : "N/A" },
                { label: "Supply", value: tokenDetails?.supply },
                { label: "Available", value: tokenDetails?.tokenBal ? Number(tokenDetails.tokenBal).toFixed(2) : "N/A" },
                { label: "Sold", value: tokenDetails?.soldTokens || "0" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "8px" }}>
                  <span style={{ color: "#d0d0d0", fontSize: "14px" }}>{item.label}</span>
                  <span style={{ color: "#fff", fontSize: "14px" }}>{item.value || "N/A"}</span>
                </div>
              ))}
            </div>

            <ButtonCmp
              title="WITHDRAW ALL TOKENS"
              handleClick={() => TOKEN_WITHDRAW()}
            />
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div
            style={{
              borderRadius: "10px",
              border: "2px solid rgba(255, 255, 255, 0.05)",
              background: "linear-gradient(150deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
              backdropFilter: "blur(10px)",
              padding: "30px",
              marginBottom: "24px",
            }}
          >
            <h4 style={{ color: "#fff", fontSize: "18px", fontWeight: "400", marginBottom: "20px" }}>
              Update Token Price
            </h4>
            <InputField
              title="New Price (in ETH)"
              placeholder="0.001"
              type="text"
              handleChange={(e) => setNewPrice(e.target.value)}
            />
            <ButtonCmp
              title="UPDATE PRICE"
              handleClick={() => UPDATE_TOKEN_PRICE(newPrice)}
            />
          </div>

          <div
            style={{
              borderRadius: "10px",
              border: "2px solid rgba(255, 255, 255, 0.05)",
              background: "linear-gradient(150deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
              backdropFilter: "blur(10px)",
              padding: "30px",
            }}
          >
            <h4 style={{ color: "#fff", fontSize: "18px", fontWeight: "400", marginBottom: "20px" }}>
              Update Token Address
            </h4>
            <InputField
              title="New Token Address"
              placeholder="0x..."
              type="text"
              handleChange={(e) => setNewToken(e.target.value)}
            />
            <ButtonCmp
              title="UPDATE TOKEN"
              handleClick={() => UPDATE_TOKEN(newToken)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ICOToken;
