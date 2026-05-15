import React from "react";

const Ask = () => {
  const faqs = [
    {
      question: "What is Token Staking?",
      answer:
        "Token staking is the process of locking up your cryptocurrency tokens in a smart contract to earn rewards over time. Our platform offers multiple pools with varying APY rates and lock periods.",
    },
    {
      question: "How are rewards calculated?",
      answer:
        "Rewards are calculated based on the APY (Annual Percentage Yield) of the pool, the amount you have staked, and the duration of your stake. The smart contract automatically calculates and distributes rewards.",
    },
    {
      question: "Can I withdraw my tokens anytime?",
      answer:
        "You can withdraw your tokens after the lock period has ended. Each pool has a specific lock duration (in days) that must be met before you can withdraw your staked tokens.",
    },
    {
      question: "What is the ICO Token Sale?",
      answer:
        "The ICO Token Sale allows you to purchase TBC tokens directly using ETH. These tokens can then be used for staking in our various pools to earn rewards.",
    },
    {
      question: "Is my investment safe?",
      answer:
        "Your tokens are secured by audited smart contracts on the Ethereum blockchain. The contracts include safety features like reentrancy guards and owner-only administrative functions.",
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="section__title">
          <h2>Frequently Asked Questions</h2>
          <p>Find answers to common questions about our staking platform</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            {faqs.map((faq, index) => (
              <div className="accordion__card" key={index}>
                <button
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#faq-${index}`}
                  aria-expanded={index === 0 ? "true" : "false"}
                >
                  {faq.question}
                </button>
                <div
                  id={`faq-${index}`}
                  className={`collapse ${index === 0 ? "show" : ""}`}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ask;
