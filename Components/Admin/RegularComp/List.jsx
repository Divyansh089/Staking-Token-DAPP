import React from "react";

const List = ({ list }) => {
  return (
    <div style={{ width: "100%", marginTop: "20px" }}>
      {list?.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "12px 0",
            borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
          }}
        >
          <span style={{ color: "#d0d0d0", fontSize: "14px" }}>{item.label}</span>
          <span style={{ color: "#fff", fontSize: "14px" }}>{item.value}</span>
        </div>
      ))}
    </div>
  );
};

export default List;
