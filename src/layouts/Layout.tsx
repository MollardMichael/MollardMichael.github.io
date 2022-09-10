import React, { CSSProperties } from "react";
import Header from "../components/Header";
import MenuNavigation from "../components/MenuNavigation";
import "normalize.css/normalize.css";
import "./index.css";

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  subTitle?: string;
}

const globalStyle: CSSProperties = {
  maxWidth: "90%",
  marginLeft: "auto",
  marginRight: "auto",
  padding: "0 8px",
  fontFamily: "Syne, serif",
  fontStyle: "normal",
  fontWeight: 400,
};

const navStyle: CSSProperties = {
  display: "flex",
  justifyContent: "space-around",
};

const firstNavItemStyle: CSSProperties = {
  margin: "0 1em 0 0",
};
const navItemStyle: CSSProperties = {
  margin: "0 1em 0 1em",
};
const lastNavItemStyle: CSSProperties = {
  margin: "0 0 0 1em",
};

export default function Layout({ children, title, subTitle }: LayoutProps) {
  return (
    <div style={globalStyle}>
      <Header title={title} subtitle={subTitle}>
        <nav style={navStyle}>
          <MenuNavigation style={firstNavItemStyle} path="/">
            Home
          </MenuNavigation>
          <MenuNavigation style={navItemStyle} path="/about">
            About
          </MenuNavigation>
          <MenuNavigation style={lastNavItemStyle} path="/blog">
            Blog
          </MenuNavigation>
        </nav>
      </Header>
      <main>{children}</main>
    </div>
  );
}
