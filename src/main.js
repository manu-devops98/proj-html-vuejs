import Vue from "vue";
import App from "./App.vue";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faChevronDown, faShoppingCart, faUserCircle, faSearch, faDownload, faArrowRight, faPlusCircle,faMinusCircle, faFileAlt, faUser, faCheck, faMapMarkerAlt)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
