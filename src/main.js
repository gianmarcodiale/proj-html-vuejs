import Vue from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronDown,
  faCartShopping,
  faMagnifyingGlass,
  faRuler,
  faLifeRing,
  faBook,
  faCheck,
  faFileLines,
  faUser,
  faArrowRight,
  faGear,
  faDisplay,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCircleUser,
  faCalendar,
  faEye,
  faFlag,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(
  faChevronDown,
  faCartShopping,
  faCircleUser,
  faMagnifyingGlass,
  faRuler,
  faLifeRing,
  faBook,
  faCheck,
  faFileLines,
  faUser,
  faArrowRight,
  faCalendar,
  faEye,
  faFlag,
  faGear,
  faDisplay
);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

const bootstrap = require("bootstrap");
Vue.use(bootstrap);
