import { Link } from "gatsby";
import React, { CSSProperties, useState } from "react";
import Underline from "./Underline";

interface Props {
  path: string;
  children: React.ReactNode;
  style?: CSSProperties;
}

export default function MenuNavigation({ path, children, style }: Props) {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const wrapperStyle: CSSProperties = {
    position: "relative",
    fontSize: "2em",
  };

  const linkStyle: CSSProperties = {
    textDecoration: "none",
    color: "black",
    opacity: isHover ? "35%" : 1,
    transition: "opacity 0.3s ease-out",
  };

  const activeLinkStyle: CSSProperties = { ...linkStyle, opacity: "35%" };

  return (
    <div style={{ ...wrapperStyle, ...(style || {}) }}>
      <Link
        style={linkStyle}
        activeStyle={activeLinkStyle}
        to={path}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </Link>
      <Underline type="thin"></Underline>
    </div>
  );
}
