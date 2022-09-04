import React from "react";

type Props = {
  title: string;
};

export const SEO = ({ title }: Props) => (
  <React.Fragment>
    <title>{title}</title>
  </React.Fragment>
);
