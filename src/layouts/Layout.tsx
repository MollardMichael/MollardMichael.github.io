import React, { CSSProperties } from "react";
import Header from "../components/Header";
import MenuNavigation from "../components/MenuNavigation";
import "normalize.css/normalize.css";
import "./index.css";
import { useResponsive } from "../hooks/useResponsive";

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  subTitle?: string;
  mainStyle?: React.CSSProperties;
}

export default function Layout({
  children,
  title,
  subTitle,
  mainStyle,
}: LayoutProps) {
  const { media } = useResponsive();

  const navStyle: CSSProperties = {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "2em",
    fontSize: "0.8em",
    ...media({
      desktop: {
        columnGap: "4em",
      },
      mobile: {
        columnGap: "2em",
      },
    }),
  };

  const globalStyle: CSSProperties = {
    fontFamily: "Syne, serif",
    fontStyle: "normal",
    fontWeight: 400,
    ...media({
      desktop: {
        padding: "1em 4em",
      },
      mobile: {
        padding: "1em 2em",
      },
    }),
  };

  return (
    <div style={globalStyle}>
      <Header title={title} subtitle={subTitle}>
        <nav style={navStyle}>
          <MenuNavigation path="/">Home</MenuNavigation>
          <MenuNavigation path="/about">About</MenuNavigation>
          <MenuNavigation path="/blog">Blog</MenuNavigation>
        </nav>
      </Header>
      <main style={mainStyle || {}}>{children}</main>
    </div>
  );
}
