import React from "react";

const Notification = ({ notifications }) => {
  return (
    <section className="section">
      <div className="container">
        <div className="section__title">
          <h2>Recent Activities</h2>
          <p>Latest staking and withdrawal notifications</p>
        </div>

        <div className="deals" style={{ marginTop: "24px" }}>
          {notifications && notifications.length > 0 ? (
            <div className="deals__table-wrap scrollable-div" style={{ overflowX: "auto" }}>
              <table className="deals__table" style={{ minWidth: "700px" }}>
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Type</th>
                    <th>Pool ID</th>
                    <th>Amount</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  {notifications.slice(0, 20).map((notification, index) => (
                    <tr key={index}>
                      <td>
                        <span className="deals__text" style={{ color: "#20be60" }}>
                          {notification.user?.slice(0, 6)}...{notification.user?.slice(-4)}
                        </span>
                      </td>
                      <td>
                        <span
                          className="deals__text"
                          style={{
                            color:
                              notification.typeOf === "Deposit"
                                ? "#20be60"
                                : notification.typeOf === "Withdraw"
                                ? "#e2293b"
                                : "#4399fc",
                          }}
                        >
                          {notification.typeOf}
                        </span>
                      </td>
                      <td>
                        <span className="deals__text">{notification.poolID}</span>
                      </td>
                      <td>
                        <span className="deals__text">{notification.amount}</span>
                      </td>
                      <td>
                        <span className="deals__text" style={{ color: "#d0d0d0", fontSize: "12px" }}>
                          {notification.timeStamp}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div style={{ textAlign: "center", padding: "40px 0", width: "100%" }}>
              <p style={{ color: "#d0d0d0", fontSize: "16px" }}>
                No recent activities found.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Notification;
