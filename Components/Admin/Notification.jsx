import React from "react";

const AdminNotification = ({ notifications }) => {
  return (
    <div>
      <h3 style={{ color: "#fff", fontSize: "24px", fontWeight: "300", marginBottom: "24px" }}>
        Notifications
      </h3>
      <div className="scrollable-div" style={{
        borderRadius: "10px", border: "2px solid rgba(255,255,255,0.05)",
        background: "linear-gradient(150deg,rgba(255,255,255,0.03) 0%,rgba(255,255,255,0.01) 100%)",
        padding: "30px", maxHeight: "600px", overflowY: "auto",
      }}>
        {notifications?.length > 0 ? (
          notifications.map((n, i) => (
            <div key={i} style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              padding: "14px", borderBottom: "1px solid rgba(255,255,255,0.05)", gap: "12px",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{
                  width: "8px", height: "8px", borderRadius: "50%",
                  backgroundColor: n.typeOf === "Deposit" ? "#20be60" : n.typeOf === "Withdraw" ? "#e2293b" : "#4399fc",
                }} />
                <div>
                  <p style={{ color: "#fff", fontSize: "14px", margin: 0 }}>
                    {n.typeOf} <span style={{ color: "#d0d0d0", fontSize: "12px" }}>Pool #{n.poolID}</span>
                  </p>
                  <p style={{ color: "#d0d0d0", fontSize: "12px", margin: 0 }}>
                    {n.user?.slice(0, 10)}...{n.user?.slice(-6)}
                  </p>
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <p style={{ color: "#fff", fontSize: "14px", margin: 0 }}>{n.amount}</p>
                <p style={{ color: "#d0d0d0", fontSize: "11px", margin: 0 }}>{n.timeStamp}</p>
              </div>
            </div>
          ))
        ) : (
          <p style={{ color: "#d0d0d0", textAlign: "center", padding: "40px 0" }}>No notifications yet.</p>
        )}
      </div>
    </div>
  );
};

export default AdminNotification;
