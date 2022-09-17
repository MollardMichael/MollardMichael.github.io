import React, { CSSProperties } from "react";

type Props = {
  type: "thin" | "big";
};

export default function Underline({ type }: Props) {
  const underlineStyle: CSSProperties = {
    width: "2.5em",
    height: type === "thin" ? "0.1em" : "0.3em",
    backgroundColor: "#D9D9D9",
  };
  return <div style={underlineStyle}></div>;
}
