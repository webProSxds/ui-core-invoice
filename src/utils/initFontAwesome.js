// import the library
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLink, faPowerOff, faUser } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";

function initFontAwesome() {
  library.add(faLink);
  library.add(faUser);
  library.add(faPowerOff);
}

export default initFontAwesome;