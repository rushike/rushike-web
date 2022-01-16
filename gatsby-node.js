const path = require(`path`)
const fs = require('fs')
const { createFilePath } = require(`gatsby-source-filesystem`)

const requiresTemplate = [`blog`, `projects`]

const getContentType = node =>
  {
    console.log("Node file path : ", node.fileAbsolutePath);
    return node.fileAbsolutePath.match(/content(.*)/)[0].split(`/`)[1]
  }

exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === "MarkdownRemark") {
    const contentType = getContentType(node)
    const path = `content/${contentType}/`
    const { createNodeField } = actions
    const slug = createFilePath({ node, getNode, basePath: path })
    createNodeField({ node, name: `slug`, value: `/${contentType}${slug}` })
    if (requiresTemplate.includes(contentType)) {
      createNodeField({
        node,
        name: `templatePath`,
        value: `./src/templates/${contentType}-post.js`,
      })
    }
  }
}

exports.createPages = async ({ graphql, actions }) => {
  // graphql function call returns a promise
  const { createPage, createRedirect } = actions;
  
	createRedirect({
    fromPath: `/*`,
    toPath: `/en`
  });

  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
              templatePath
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const contentType = node.fields.slug.split(`/`)[1]
    if (requiresTemplate.includes(contentType)) {
      createPage({
        path: node.fields.slug,
        component: path.resolve(node.fields.templatePath),
        context: {
          //   Data passed to context is available in page queries as graphql variables
          slug: node.fields.slug,
          templatePath: node.fields.templatePath,
        },
      })
    }
  })
}

exports.onCreateWebpackConfig = ({ actions }, options) => {
  const srcPath = options.srcPath || path.resolve(__dirname, 'src')
  try {
    const stat = fs.statSync(srcPath)
    if(!stat.isDirectory) {
      console.warn(`gatsby-plugin-resolve-src: src path is not a directory ("${srcPath}")`)
    }
  } catch(err) {
    console.warn(`gatsby-plugin-resolve-src: src path not found at "${srcPath}"`)
  }
  actions.setWebpackConfig({
    resolve: {
      modules: [srcPath, 'node_modules'],
      alias : {
        "@components" : path.resolve(srcPath, 'components'),
      }
    },
  })
}