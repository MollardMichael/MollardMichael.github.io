import { graphql, useStaticQuery } from "gatsby";
import React from "react";

export default function Bio() {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          social {
            linkedin
            blog
          }
        }
      }
    }
  `);
  const social = data.site.siteMetadata.social;

  return (
    <div>
      <div>
        linkedin:
        <a href={social.linkedin}>{social.linkedin}</a>
      </div>
      <div>
        blog :<a href={social.blog}>{social.blog}</a>
      </div>
    </div>
  );
}
