import React, { CSSProperties } from "react";

const underlineStyle: CSSProperties = {
  position: "absolute",
  width: "98px",
  height: "10px",
  backgroundColor: "#D9D9D9",
};

export default function Underline() {
  return <div style={underlineStyle}></div>;
}
