"use client";
import React from "react";

export default function useWindowSize() {
  const isSSR = typeof window !== "undefined";

  const [windowSize, setWindowSize] = React.useState({
    width: isSSR ? 1200 : isSSR ? 0 : window.innerWidth,
    height: isSSR ? 800 : isSSR ? 0 : window.innerHeight,
  });

  function changeWindowSize() {
    if (!isSSR) {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }
  }

  React.useEffect(() => {
    if (!isSSR) {
      window.addEventListener("resize", changeWindowSize);
      return () => {
        window.removeEventListener("resize", changeWindowSize);
      };
    }
  }, [isSSR]);

  return windowSize;
}
