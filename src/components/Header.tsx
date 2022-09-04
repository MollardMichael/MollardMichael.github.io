import React, { CSSProperties } from "react";
import Underline from "./Underline";

interface HeaderProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

const headerStyle: CSSProperties = {};
const mainStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

const titleStyle: CSSProperties = {
  fontSize: "36px",
  display: "flex",
  alignItems: "baseline",
};

const subtitleStyle: CSSProperties = {
  fontSize: "24px",
  fontWeight: "bold",
};

export default function Header({ children, title, subtitle }: HeaderProps) {
  return (
    <header style={headerStyle}>
      <div style={mainStyle}>
        <div style={titleStyle}>
          <h1>{title}</h1>
          {subtitle && <div style={subtitleStyle}>{subtitle}</div>}
        </div>
        <div>{children}</div>
      </div>
      <Underline></Underline>
    </header>
  );
}
