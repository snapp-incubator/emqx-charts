const path = require("path");

// For absolute import

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: { modules: [path.resolve(__dirname, "src"), "node_modules"] },
    })
}
