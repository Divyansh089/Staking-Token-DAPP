import React from "react";
import Link from "next/link";
import {
  TiSocialTwitter,
  TiSocialFacebook,
  TiSocialLinkedin,
} from "./ReactICON/index";

const Footer = () => {
  const footerNav = [
    {
      title: "Services & Features",
      links: [
        { name: "Invest", url: "#" },
        { name: "Token", url: "#" },
        { name: "Affiliate", url: "#" },
        { name: "Contest", url: "#" },
        { name: "Safety", url: "#" },
        { name: "Automatization", url: "#" },
        { name: "Analytics", url: "#" },
        { name: "Reports", url: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Centure", url: "#" },
        { name: "Our news", url: "#" },
        { name: "License", url: "#" },
        { name: "Contacts", url: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Help center", url: "#" },
        { name: "How it works", url: "#" },
        { name: "Privacy policy", url: "#" },
        { name: "Terms & conditions", url: "#" },
      ],
    },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 col-lg-3">
            <div className="footer__logo">
              <img src="img/logo.svg" alt="Crypto King" />
            </div>
            <p className="footer__tagline">
              The Centure team works hard
              <br />
              to deliver exceptional financial results
              <br />
              and increase our clients&apos; revenue.
            </p>
          </div>

          {footerNav.map((section, i) => (
            <div className="col-6 col-md-4 col-lg-3" key={i}>
              <h6 className="footer__title">{section.title}</h6>
              <div className="footer__nav">
                {section.links.map((link, j) => (
                  <a href={link.url} key={j}>
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="footer__content">
          <p className="footer__copyright">
            &copy; Centure, 2024. Created by
            <a href="https://www.theblockchaincoders.com" target="_blank" rel="noopener noreferrer">
              @theblockchaincoders.com
            </a>
            .
          </p>

          <div className="footer__social">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <TiSocialTwitter />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <TiSocialFacebook />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <TiSocialLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
