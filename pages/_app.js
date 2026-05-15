import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";

import {
  getDefaultWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { publicProvider } from "wagmi/providers/public";
import { Toaster } from "react-hot-toast";

const holesky = {
  id: 17000,
  name: "Holesky",
  network: "holesky",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: "https://ethereum-holesky-rpc.publicnode.com",
  },
  blockExplorers: {
    default: { name: "Etherscan", url: "https://holesky.etherscan.io" },
  },
  testnet: true,
};

const { chains, provider } = configureChains(
  [holesky],
  [
    jsonRpcProvider({
      rpc: (chain) => ({ http: chain.rpcUrls.default }),
    }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "Staking Dapp",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export default function App({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />
        <Toaster position="bottom-right" />

        <script src="js/bootstrap.bundle.min.js"></script>
        <script src="js/smooth-scrollbar.js"></script>
        <script src="js/splide.min.js"></script>
        <script src="js/three.min.js"></script>
        <script src="js/vanta.fog.min.js"></script>
        <script src="js/main.js"></script>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
