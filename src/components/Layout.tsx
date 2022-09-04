import React, { CSSProperties } from "react";
import Header from "./Header";
import MenuNavigation from "./MenuNavigation";
import "normalize.css/normalize.css";

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  subTitle?: string;
}

const globalStyle: CSSProperties = {
  maxWidth: "1280px",
  marginLeft: "auto",
  marginRight: "auto",
  fontFamily: "Syne, serif",
  fontStyle: "normal",
  fontWeight: 400,
};

const navStyle: CSSProperties = {
  display: "flex",
  justifyContent: "space-around",
};

const navItemStyle: CSSProperties = {
  margin: "0 35px 0 35px",
};

export default function Layout({ children, title, subTitle }: LayoutProps) {
  return (
    <div style={globalStyle}>
      <Header title={title} subtitle={subTitle}>
        <nav style={navStyle}>
          <MenuNavigation style={navItemStyle} path="/">
            Home
          </MenuNavigation>
          <MenuNavigation style={navItemStyle} path="/about">
            About
          </MenuNavigation>
          <MenuNavigation style={navItemStyle} path="/blog">
            Blog
          </MenuNavigation>
        </nav>
      </Header>
      <main>{children}</main>
    </div>
  );
}
