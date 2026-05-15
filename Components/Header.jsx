import React, { useState } from "react";
import Link from "next/link";
import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { SHORTEN_ADDRESS } from "../Context/index";

const Header = () => {
  const { address } = useAccount();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <button
            className={`header__btn ${menuOpen ? "header__btn--active" : ""}`}
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <Link href="/" className="header__logo">
            <img src="img/logo.svg" alt="Crypto King" />
          </Link>

          <span className="header__tagline">Crypto King</span>

          <ul className={`header__nav ${menuOpen ? "header__nav--active" : ""}`}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="#staking">Staking</Link>
            </li>
            <li>
              <Link href="#crypto">Crypto</Link>
            </li>
            <li>
              <Link href="#partners">Partners</Link>
            </li>
          </ul>

          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <ConnectButton />
            <Link href="/admin" className="header__profile">
              <span>TOKEN ICO</span>
              <i className="ti-user"></i>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
