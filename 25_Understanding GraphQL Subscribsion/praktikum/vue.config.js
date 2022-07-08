const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: ["vuetify"],
  chainWebpack: (config) => {
    config.module
      .rule("vue")
      .use("vue-loader")
      .loader("vue-loader")
      .tap((options) => {
        options.transpileOptions = {
          transforms: {
            dangerousTaggedTemplateString: true,
          },
        };
        return options;
      });
  },
});
