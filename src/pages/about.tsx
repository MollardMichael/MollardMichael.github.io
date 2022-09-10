import * as React from "react";
import { graphql, HeadFC, useStaticQuery } from "gatsby";
import Layout from "../layouts/Layout";
import { SEO } from "../components/SEO";
import Img from "gatsby-image";
import Bio from "../components/Bio";

type AboutProp = {};

const socialStyle: React.CSSProperties = {};
const bioStyle: React.CSSProperties = {};

const AboutPage = ({}: AboutProp) => {
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

  return (
    <Layout title="About">
      <h1>Michaël Mollard</h1>
      <Img fixed={data.file.childImageSharp.fixed} alt="Picture of me" />
      <p style={bioStyle}>
        Software enthusiast working mostly in web engineering and in finance, I
        greatly enjoy the building process and leading people to do great things
        together. My goal to make sure things get done has allowed me to touch
        on many part of the engineering skill-set. I've dabbled with frontend,
        mobile, CMSs, data science and my main area of expertise which is mostly
        backends (from applications to infrastructure)
      </p>
      <p>
        I am currently working for <a href="https://swan.io">Swan</a> where I
        lead the development of payment solutions for the EU market. We try to
        empower any company by giving them (and their clients) direct access to
        features that only bank are able to provide.
      </p>
      <p>
        You'll find on this page, some of the things I care about. I started a
        blog which is targeted to people getting into tech or finance and that
        want to understand specific topics. You'll also find some of the project
        I've done either for work or because I had a need for them myself.
      </p>
      <Bio />
    </Layout>
  );
};

export default AboutPage;

export const Head: HeadFC = () => <SEO title="Michaël Mollard's bio"></SEO>;
