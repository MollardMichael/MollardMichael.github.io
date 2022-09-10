import React, { CSSProperties } from "react";

type Props = {
  type: "thin" | "big";
};

export default function Underline({ type }: Props) {
  const underlineStyle: CSSProperties = {
    position: "absolute",
    width: "max(60px, 4.5vw)",
    height: type === "thin" ? "0.2vw" : "0.6vw",
    backgroundColor: "#D9D9D9",
  };
  return <div style={underlineStyle}></div>;
}
