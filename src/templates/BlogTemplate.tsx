import * as React from "react";
import { graphql } from "gatsby";
import { SEO } from "../components/SEO";
import Layout from "../layouts/Layout";
import Img from "gatsby-image";
import { MDXProvider } from "@mdx-js/react";
import Bio from "../components/Bio";

const BlogTemplate = ({ data: { mdx: post }, children }: any) => {
  return (
    <Layout title={post.frontmatter.type}>
      <article itemScope itemType="http://schema.org/Article">
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
          <Img
            fixed={post.frontmatter.image.childImageSharp.fixed}
            alt="Thumbnail"
          />
        </header>
        <MDXProvider>{children}</MDXProvider>
        <footer>
          <Bio />
        </footer>
      </article>
    </Layout>
  );
};

export default BlogTemplate;

export const Head = ({ data: { mdx: post } }: any) => {
  return <SEO title={post.frontmatter.title} />;
};

export const pageQuery = graphql`
  query ($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      id
      frontmatter {
        type
        title
        date(formatString: "YYYY")
        image {
          childImageSharp {
            fixed(width: 225, height: 225) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`;
