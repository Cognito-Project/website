const withImages = require("next-images");
const withCSS = require('@zeit/next-css')
module.exports = withCSS(withImages({
  //target: "serverless",
  /*exportPathMap: function() {
    return {
      "/": { page: "/" },
      "/register": { page: "/register" }
    };
  }*/
}));
