import path from "path";

const postTemplate = path.resolve(`./src/templates/BlogTemplate.tsx`);

export const createPages = async ({ actions, graphql, reporter }: any) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve(`src/templates/BlogTemplate.tsx`);

  const result = await graphql(`
    {
      allMdx(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
        edges {
          node {
            id
            frontmatter {
              path
            }
            internal {
              contentFilePath
            }
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  result.data.allMdx.edges.forEach(({ node }: any) => {
    createPage({
      path: node.frontmatter.path,
      component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {},
    });
  });
};
