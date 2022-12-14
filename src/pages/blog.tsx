import * as React from "react";
import { graphql, HeadFC, useStaticQuery } from "gatsby";
import Layout from "../layouts/Layout";
import { SEO } from "../components/SEO";
import ProjectCard from "../components/ProjectCard";

type IndexProp = {};

const IndexPage = ({}: IndexProp) => {
  const projectsStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0,1fr))",
    columnGap: "3em",
    rowGap: "2em",
  };

  const data = useStaticQuery(graphql`
    query MyBlogs {
      allMdx(filter: { frontmatter: { type: { eq: "Blog" } } }) {
        edges {
          node {
            id
            tableOfContents
            excerpt(pruneLength: 160)
            body
            frontmatter {
              type
              image {
                publicURL
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              tags
              title
              path
              date(formatString: "MMM YYYY")
            }
          }
        }
      }
    }
  `);

  return (
    <Layout title="Blog Posts" subTitle="by Michaël Mollard">
      <h1>Blog</h1>
      <div style={projectsStyle}>
        {data.allMdx.edges.map(({ node }: any) => (
          <ProjectCard
            id={node.id}
            imagePublicURL={node.frontmatter.image.publicURL}
            image={node.frontmatter.image.childImageSharp?.fluid}
            title={node.frontmatter.title}
            year={node.frontmatter.date}
            excerpt={node.excerpt}
            tags={node.frontmatter.tags}
            path={node.frontmatter.path}
            key={node.id}
          />
        ))}
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <SEO title="Michaël Mollard's blog"></SEO>;
