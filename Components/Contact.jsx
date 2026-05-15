import React from "react";
import { MdEmail, BsSendFill } from "./ReactICON/index";

const Contact = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="cta">
              <h3 className="cta__title">Subscribe to Our Newsletter</h3>
              <p className="cta__text">
                Stay updated with the latest staking pools, APY changes, and
                platform updates. <b>Join our community today!</b>
              </p>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  maxWidth: "500px",
                  marginTop: "30px",
                  gap: "12px",
                }}
              >
                <div style={{ flex: 1, position: "relative" }}>
                  <MdEmail
                    style={{
                      position: "absolute",
                      left: "16px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "#d0d0d0",
                      fontSize: "18px",
                    }}
                  />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    style={{
                      width: "100%",
                      height: "50px",
                      borderRadius: "10px",
                      border: "2px solid rgba(255, 255, 255, 0.05)",
                      background:
                        "linear-gradient(150deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
                      color: "#fff",
                      padding: "0 20px 0 44px",
                      fontSize: "14px",
                      fontFamily: "'Manrope', sans-serif",
                    }}
                  />
                </div>
                <button
                  className="hero__btn"
                  style={{ width: "auto", padding: "0 30px", marginTop: 0 }}
                >
                  <BsSendFill />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
