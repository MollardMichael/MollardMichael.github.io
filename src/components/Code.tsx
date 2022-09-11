import Highlight, { defaultProps, Language } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/vsDark";
import React, { CSSProperties, useState } from "react";
import { copyToClipboard } from "../utils/copy-to-clipboard";

const preStyle: CSSProperties = {
  position: "relative",
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
    right: "0.25rem",
    border: "0",
    borderRadius: "3px",
    margin: "0.25em",
    opacity: isHover ? "1" : "0.3",
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
        <pre className={className} style={{ ...style, ...preStyle }}>
          <button
            style={copyStyle}
            onClick={handleClickCopy}
            onMouseEnter={handleMouseEnterCopy}
            onMouseLeave={handleMouseLeaveCopy}
          >
            Copy
          </button>

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
      )}
    </Highlight>
  );
};

export default Code;
