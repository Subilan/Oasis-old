import { resolve } from "path";

export const pluginOptions = {
    "style-resources-loader": {
        preProcessor: "less",
        patterns: [resolve(__dirname, "./src/css/*.less")],
    },
};

export const productionSourceMap = false;
