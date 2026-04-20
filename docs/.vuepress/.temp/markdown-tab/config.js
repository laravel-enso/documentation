import { CodeTabs } from "/Users/adi/code/documentation/node_modules/@vuepress/plugin-markdown-tab/dist/client/components/CodeTabs.js";
import { Tabs } from "/Users/adi/code/documentation/node_modules/@vuepress/plugin-markdown-tab/dist/client/components/Tabs.js";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
