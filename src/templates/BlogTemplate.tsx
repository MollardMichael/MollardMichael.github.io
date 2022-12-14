import * as React from "react";
import { graphql } from "gatsby";
import { SEO } from "../components/SEO";
import Layout from "../layouts/Layout";
import Img from "gatsby-image";
import { MDXProvider } from "@mdx-js/react";
import Bio from "../components/Bio";
import Code from "../components/Code";
import { useResponsive } from "../hooks/useResponsive";

const components = {
  pre: ({ children: { props } }: any) => {
    return (
      <Code
        codeString={props.children.trim()}
        language={props.className && props.className.replace("language-", "")}
        {...props}
      />
    );
  },
};

const BlogTemplate = ({ data: { mdx: post }, children }: any) => {
  const { media } = useResponsive();
  const mainStyle: React.CSSProperties = {
    ...media<React.CSSProperties>({
      desktop: {
        maxWidth: "70%",
      },
      mobile: {
        maxWidth: "100%",
      },
    }),
  };

  const articleStyle: React.CSSProperties = {
    paddingBottom: "1em",
  };

  return (
    <Layout title={post.frontmatter.type} mainStyle={mainStyle}>
      <article
        itemScope
        itemType="http://schema.org/Article"
        style={articleStyle}
      >
        <section>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p>
            {post.frontmatter.date}{" "}
            {post.frontmatter.tags.map((tag: string) => `#${tag}`).join(" ")}
          </p>
          {post.frontmatter.image.childImageSharp ? (
            <Img
              fixed={post.frontmatter.image.childImageSharp.fixed}
              alt="Thumbnail"
            />
          ) : (
            <img
              src={post.frontmatter.image.publicURL}
              alt="Thumbnail"
              style={{ maxWidth: "400px" }}
            />
          )}
        </section>
        <section>
          <MDXProvider components={components}>{children}</MDXProvider>
        </section>
      </article>
      <footer>
        <Bio />
      </footer>
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
        tags
        date(formatString: "MMM YYYY")
        image {
          publicURL
          childImageSharp {
            fixed(width: 450, height: 450) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`;
