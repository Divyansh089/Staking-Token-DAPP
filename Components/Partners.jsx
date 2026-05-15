import React from "react";

const Partners = () => {
  const partners = [
    {
      name: "theblockchaincoders.com",
      image: "img/partners/logo1.svg",
      url: "https://www.theblockchaincoders.com/pro-nft-marketplace",
    },
    {
      name: "theblockchaincoders.com",
      image: "img/partners/logo2.svg",
      url: "https://www.theblockchaincoders.com/pro-nft-marketplace",
    },
    {
      name: "theblockchaincoders.com",
      image: "img/partners/logo3.svg",
      url: "https://www.theblockchaincoders.com/pro-nft-marketplace",
    },
    {
      name: "theblockchaincoders.com",
      image: "img/partners/logo4.svg",
      url: "https://www.theblockchaincoders.com/pro-nft-marketplace",
    },
    {
      name: "theblockchaincoders.com",
      image: "img/partners/logo5.svg",
      url: "https://www.theblockchaincoders.com/pro-nft-marketplace",
    },
    {
      name: "theblockchaincoders.com",
      image: "img/partners/logo6.svg",
      url: "https://www.theblockchaincoders.com/pro-nft-marketplace",
    },
    {
      name: "theblockchaincoders.com",
      image: "img/partners/logo7.svg",
      url: "https://www.theblockchaincoders.com/pro-nft-marketplace",
    },
    {
      name: "theblockchaincoders.com",
      image: "img/partners/logo8.svg",
      url: "https://www.theblockchaincoders.com/pro-nft-marketplace",
    },
  ];

  return (
    <section className="section" id="partners">
      <div className="container">
        <div className="section__title">
          <h2>Our Partners</h2>
          <p>Trusted by leading blockchain companies</p>
        </div>

        <div className="row">
          {partners.map((partner, index) => (
            <div className="col-6 col-md-4 col-lg-3" key={index}>
              <a href={partner.url} target="_blank" rel="noopener noreferrer">
                <div className="partner">
                  <img src={partner.image} alt={partner.name} />
                  <p>{partner.name}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
