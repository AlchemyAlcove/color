module.exports = {
  files: {
    javascripts: {
      joinTo: {
        "index.js": /^index.js/
      }
    }
  },

  plugins: {
    babel: {
      presets: [["env", {"modules": false}], "es2015"],
      plugins: ["transform-es2015-modules-commonjs"]
    }
  },

  modules: {
    autoRequire: {
      "index.js": ["index.js"]
    }
  },

  npm: {
    enabled: true
  },

  overrides: {
    production: {
      paths: {
        public: "./dist"
      }
    }
  }
};
