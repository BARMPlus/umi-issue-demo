import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
  ],
  npmClient: 'yarn',
  externals:{
    "react": "React",
    "react-dom": "ReactDOM",
  },
  headScripts:[
    'https://g.alicdn.com/code/lib/react/16.14.0/umd/react.production.min.js',
    'https://g.alicdn.com/code/lib/react-dom/16.14.0/umd/react-dom.production.min.js',
  ],
});