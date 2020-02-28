import * as Msal from "msal"; // https://pub.dev/documentation/msal_js/latest/msal_js/UserAgentApplication-class.html
import store from "@/store/index.js";
import msalConfig from "@/config/maslConfig.js";

export default class AuthService {
  constructor() {
    this.msalConfig = {
      auth: {
        clientId: msalConfig.clientId,
        authority: msalConfig.authority,
        validateAuthority: false
      },
      cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: true
      }
    };
    // instantiate MSAL
    this.app = new Msal.UserAgentApplication(this.msalConfig);
  }

  login() {
    this.app
      .loginPopup()
      .then(result => {
        console.log("success", result);
        store.commit("sigin", result);
      })
      .catch(error => {
        console.log("login error", error);
      });
  }

  logout() {
    this.app.logout();
  }

  getUser() {
    return this.app.getAccount();
  }
}
