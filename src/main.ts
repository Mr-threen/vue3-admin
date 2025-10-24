import { createApp } from "vue";
import App from "./App.vue";
import "./assets/base.css";

import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";
import * as Icons from "@ant-design/icons-vue";

const app = createApp(App);

app.use(Antd);
// Antd 注入全部图标
app.config.globalProperties.$icons = Icons;
for (const key in Icons) app.component(key, Icons[key as keyof typeof Icons]);

app.mount("#app");
