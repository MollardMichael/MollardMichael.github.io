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

const titleWrapperStyle: CSSProperties = {
  display: "flex",
  alignItems: "baseline",
};

const titleStyle: CSSProperties = {
  fontSize: "3em",
  fontWeight: "bold",
};

const subtitleStyle: CSSProperties = {
  fontSize: "0.8em",
  fontWeight: "bold",
};

export default function Header({ children, title, subtitle }: HeaderProps) {
  return (
    <header style={headerStyle}>
      <div style={mainStyle}>
        <div style={titleWrapperStyle}>
          <h1 style={titleStyle}>{title}</h1>
          {subtitle && <div style={subtitleStyle}>{subtitle}</div>}
        </div>
        <div>{children}</div>
      </div>
      <Underline type="big"></Underline>
    </header>
  );
}
