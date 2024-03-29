const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
    applications: "./src/applications.js",
    profile: "./src/profile.js",
    jobsites: "./src/jobsites.js",
    applicationmap: "./src/applicationmap.js",
  },
  output: {
    path: path.resolve(__dirname, "dist/bundles"),
    filename: "[name].bundle.js",
    libraryTarget: "var",
    library: "EntryPoint",
  },
  watch: true,
};
