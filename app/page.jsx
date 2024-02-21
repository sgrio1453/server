"use client";
import ConnectWallet from "@/components/ConnectWalletButton/ConnectWalletButton";
import React, { useState, useEffect } from "react";

function App() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: "0",
          left: "0",
          zIndex: "-1",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "80%",
            backgroundColor: "#FF68B5",
          }}
        ></div>
        <svg
          viewBox="0 0 500 500"
          preserveAspectRatio="none"
          style={{ width: "100%", height: "100%" }}
        >
          <path
            d="M 0 30 C 150 100 280 0 500 20 L 500 0 L 0 0"
            fill="#FF68B5"
          ></path>
        </svg>
      </div>

      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "red",
          zIndex: "1",
        }}
      >
        <ConnectWallet />
      </div>
    </div>
  );
}

export default App;
