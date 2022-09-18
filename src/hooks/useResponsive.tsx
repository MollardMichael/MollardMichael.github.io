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
    width: 0,
    height: 0,
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
    if (isBrowser()) window.addEventListener("resize", handleResize);

    // We might have missed an update between calling `get` in render and
    // `addEventListener` in this handler, so we set it here. If there was
    // no change, React will filter out this update as a no-op.
    setDesktop(isDesktop(getWindowDimensions().width, breakpoint));

    return () => {
      if (isBrowser()) window.removeEventListener("resize", handleResize);
    };
  }, [breakpoint]);

  return { desktop, media };
};
