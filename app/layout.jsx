// ******* Wallet Kitt****
"use client";
import { Provider } from "react-redux";
import { store } from "../app/(Auth)/redux/store";
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  lightTheme,
  connectorsForWallets,
} from "@rainbow-me/rainbowkit";
import {
  injectedWallet,
  rainbowWallet,
  walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { configureChains, createConfig, WagmiConfig } from "wagmi";

import { mainnet, polygon, optimism, arbitrum, zora } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, zora],
  [publicProvider()]
);
// const  projectId = "P"
const connectors = connectorsForWallets([
  {
    groupName: "Populer",
    wallets: [injectedWallet({ chains })],
  },
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});
// ***** Wallet Kit *****

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider store={store}>
        <WagmiConfig config={wagmiConfig}>
          <RainbowKitProvider chains={chains}>
            <body
              className="w-screen h-screen overflow-hidden"
              style={{
                backgroundColor: "#F4D839",

                width: "100",
                height: "100%",
                overflowX: "hidden",
                padding: "40px",
              }}
            >
              {children}
            </body>
          </RainbowKitProvider>
        </WagmiConfig>
      </Provider>
    </html>
  );
}
