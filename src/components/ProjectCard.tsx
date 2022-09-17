import React from "react";
import Img, { FluidObject } from "gatsby-image";
import { Link } from "gatsby";

type Props = {
  id: string;
  imagePublicURL: string;
  image?: FluidObject;
  title: string;
  year: string;
  excerpt: string;
  path: string;
  tags: string[];
};

export default function ProjectCard({
  id,
  image,
  title,
  year,
  excerpt,
  imagePublicURL,
  tags,
  path,
}: Props) {
  const projectCardStyle: React.CSSProperties = {};

  const tagWrapperStyle: React.CSSProperties = {
    marginTop: "2em",
  };

  return (
    <div style={projectCardStyle} key={id}>
      {image ? (
        <Img fluid={image} alt="Picture of project" />
      ) : (
        <img src={imagePublicURL} alt="Picture of project" />
      )}
      <Link style={{ color: "black" }} to={path}>
        <h2>{title}</h2>
      </Link>
      <h3>{year}</h3>
      <div>{excerpt}</div>
      <div style={tagWrapperStyle}>
        {tags &&
          tags.map((tag: string, index: number) => (
            <span
              style={{
                padding: "0 0.3em",
                ...(index === 0 ? { paddingLeft: "0" } : {}),
              }}
              key={tag}
            >
              #{tag}
            </span>
          ))}
      </div>
    </div>
  );
}
