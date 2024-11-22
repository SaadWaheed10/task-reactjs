import React from "react";
import FirstView from "../components/FirstView";
import SecondView from "../components/SecondView";
import ThirdView from "../components/ThirdView";

export default function HomeScreen() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "linear-gradient(145deg, #141414, #1e1e1e)",
      }}
    >
      <FirstView />
      <SecondView />
      <ThirdView />
    </div>
  );
}
