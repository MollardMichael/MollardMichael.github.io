import * as React from "react";

const BREAKPOINT = 992;
const isDesktop = (width: number, breakpoint: number) => width >= breakpoint;

const isBrowser = () => typeof window !== "undefined";

function getWindowDimensions() {
  if (isBrowser()) {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  return {
    width: 1200,
    height: 800,
  };
}

export const useResponsive = (breakpoint: number | undefined = BREAKPOINT) => {
  const [desktop, setDesktop] = React.useState(() =>
    isDesktop(getWindowDimensions().width, breakpoint)
  );

  const media = React.useCallback(
    <T,>(values: { mobile: T; desktop?: T }): T =>
      desktop ? values.desktop ?? values.mobile : values.mobile,
    [desktop]
  );

  React.useEffect(() => {
    const handleResize = () => {
      setDesktop(isDesktop(getWindowDimensions().width, breakpoint));
    };
    window.addEventListener("resize", handleResize);
    setDesktop(isDesktop(getWindowDimensions().width, breakpoint));

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [breakpoint]);

  return { desktop, media };
};
