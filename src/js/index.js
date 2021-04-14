import { header } from "./components/header/header";
import { footer } from "./components/footer/footer";
import { main } from "./components/main/main";

const webix = require("webix/webix.js");

const App = webix.ready(() => {
  webix.ui({
    view: "layout",
    rows: [
      header,
      main,
      footer,
    ],
  });
});
