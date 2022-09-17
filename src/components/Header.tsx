import React, { CSSProperties } from "react";
import { useResponsive } from "../hooks/useResponsive";
import Underline from "./Underline";

interface HeaderProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

const headerStyle: CSSProperties = {};

const titleStyle: CSSProperties = {
  fontSize: "3em",
  fontWeight: "bold",
  margin: "0",
};

export default function Header({ children, title, subtitle }: HeaderProps) {
  const { media } = useResponsive();

  const mainStyle: CSSProperties = {
    padding: "2em 0",
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-between",
    ...media({
      mobile: { flexFlow: "column" },
      desktop: { flexFlow: "row" },
    }),
  };

  const titleWrapperStyle: CSSProperties = {
    display: "flex",
    alignItems: "baseline",
    columnGap: "0.5em",
    ...media({
      mobile: { flexFlow: "column" },
      desktop: { flexFlow: "row" },
    }),
  };

  const subtitleStyle: CSSProperties = {
    fontSize: "1em",
    fontWeight: "bold",
  };

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
