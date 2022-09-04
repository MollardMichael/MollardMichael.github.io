import * as React from "react";
import type { HeadFC } from "gatsby";
import Layout from "../components/Layout";
import { SEO } from "../components/SEO";

type IndexProp = {};

const IndexPage = ({}: IndexProp) => {
  return (
    <Layout title="Blog Posts" subTitle="by Michaël Mollard">
      <h1>Works</h1>
      <div>...</div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <SEO title="Michaël Mollard's blog"></SEO>;
