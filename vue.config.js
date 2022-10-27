// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
// module.exports = {
//   publicPath: process.env.NODE_ENV === "production" ? "/numWordsApp/" : "/",
// };

module.exports = {
  publicPath: "/",
  productionSourceMap: false, // to hide source code
  pluginOptions: {
    sitemap: {
      urls: [
        "https://www.numwords.us",
        "https://www.numwords.us/about",
        "https://www.numwords.us/contact",
      ],
    },
  },
};
