import React, { useState } from "react";
import InputField from "./RegularComp/InputField";
import ButtonCmp from "./RegularComp/ButtonCmp";

const Pool = ({ createPool }) => {
  const [pool, setPool] = useState({
    _depositToken: "",
    _rewardToken: "",
    _apy: "",
    _lockDays: "",
  });

  const handleCreatePool = () => {
    createPool(pool);
  };

  return (
    <div>
      <h3 style={{ color: "#fff", fontSize: "24px", fontWeight: "300", marginBottom: "24px" }}>
        Create New Pool
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
        <div className="row">
          <div className="col-12 col-md-6">
            <InputField
              title="Deposit Token Address"
              placeholder="0x..."
              type="text"
              handleChange={(e) =>
                setPool({ ...pool, _depositToken: e.target.value })
              }
            />
          </div>
          <div className="col-12 col-md-6">
            <InputField
              title="Reward Token Address"
              placeholder="0x..."
              type="text"
              handleChange={(e) =>
                setPool({ ...pool, _rewardToken: e.target.value })
              }
            />
          </div>
          <div className="col-12 col-md-6">
            <InputField
              title="APY (%)"
              placeholder="e.g., 25"
              type="number"
              handleChange={(e) =>
                setPool({ ...pool, _apy: e.target.value })
              }
            />
          </div>
          <div className="col-12 col-md-6">
            <InputField
              title="Lock Days"
              placeholder="e.g., 30"
              type="number"
              handleChange={(e) =>
                setPool({ ...pool, _lockDays: e.target.value })
              }
            />
          </div>
        </div>

        <ButtonCmp title="CREATE POOL" handleClick={handleCreatePool} />
      </div>
    </div>
  );
};

export default Pool;
