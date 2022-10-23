import Highlight, { defaultProps, Language } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/vsDark";
import React, { CSSProperties, useState } from "react";
import { copyToClipboard } from "../utils/copy-to-clipboard";
import Copy from "../images/logo/copy.svg";
import ReactTooltip from "react-tooltip";

const wrapperStyle: CSSProperties = {
  position: "relative",
};

const preStyle: CSSProperties = {
  textAlign: "left",
  margin: "1em 0",
  padding: "0.5em",
  overflowX: "auto",
  borderRadius: "3px",
};

const lineNumberStyle: CSSProperties = {
  display: "inline-block",
  width: "2em",
  userSelect: "none",
  opacity: "0.3",
};

const Code = ({
  codeString,
  language,
}: {
  codeString: string;
  language: Language;
}) => {
  const [isHover, setIsHover] = useState(false);

  const copyStyle: CSSProperties = {
    position: "absolute",
    top: "0.25rem",
    right: "0.25rem",
    opacity: isHover ? "1" : "0.3",
    width: "2em",
    height: "2em",
    cursor: "pointer",
  };

  const handleClickCopy = () => {
    copyToClipboard(codeString);
  };

  const handleMouseEnterCopy = () => {
    setIsHover(true);
  };

  const handleMouseLeaveCopy = () => {
    setIsHover(false);
  };

  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div style={wrapperStyle}>
          <button
            style={copyStyle}
            onClick={handleClickCopy}
            onMouseEnter={handleMouseEnterCopy}
            onMouseLeave={handleMouseLeaveCopy}
            data-tip="Copied to clipboard"
          >
            <Copy />
          </button>
          <ReactTooltip
            delayHide={2000}
            event="click"
            type="success"
            effect="solid"
            eventOff="click"
            isCapture={true}
          />
          <pre className={className} style={{ ...style, ...preStyle }}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                <span style={lineNumberStyle}>
                  {String(i + 1).padStart(String(tokens.length).length, " ")}
                </span>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        </div>
      )}
    </Highlight>
  );
};

export default Code;
