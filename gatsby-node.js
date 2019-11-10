const path = require("path");

exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  // Hack due to Tailwind ^1.1.0 using `reduce-css-calc` which assumes node
  // https://github.com/bradlc/babel-plugin-tailwind-components/issues/39#issuecomment-526892633
  const config = getConfig();
  config.node = {
    fs: "empty"
  };
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(
    `
      {
        allDataJson {
          edges {
            node {
              absen
              email
              harapan
              id
              ig
              line
              nama
              panggilan
              prodi
              sma
              ttl
              interest
              image {
                src {
                  childImageSharp {
                    fluid(maxWidth: 500) {
                      base64
                      aspectRatio
                      src
                      srcSet
                      sizes
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  );
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  const template = path.resolve(`src/templates/about.js`);
  // console.log(data);
  result.data.allDataJson.edges.forEach(({node}) => {
    const path = `${node.email.split("@")[0]}`;

    createPage({
      path,
      component: template,
      context: node
    });
  });
};
