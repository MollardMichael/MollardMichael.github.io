import * as React from "react";
import { graphql, HeadFC, useStaticQuery } from "gatsby";
import Layout from "../components/Layout";
import { SEO } from "../components/SEO";
import Img from "gatsby-image";

type IndexProp = {};

const socialStyle: React.CSSProperties = {};
const bioStyle: React.CSSProperties = {};

const IndexPage = ({}: IndexProp) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "me.jpeg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 225, height: 225) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  console.log(data);

  return (
    <Layout title="About">
      <h1>Michaël Mollard</h1>
      <Img fixed={data.file.childImageSharp.fixed} alt="Picture of me" />
      <p style={bioStyle}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <div style={socialStyle}>
        <div>
          linkedin:{" "}
          <a href="https://www.linkedin.com/in/mmollard/">
            https://www.linkedin.com/in/mmollard/
          </a>
        </div>
        <div>
          blog :{" "}
          <a href="https://mollardmichael.github.io/blog">
            https://mollardmichael.github.io/blog
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <SEO title="Michaël Mollard's bio"></SEO>;
