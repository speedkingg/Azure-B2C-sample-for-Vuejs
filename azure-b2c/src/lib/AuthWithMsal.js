import * as Msal from "msal"; // https://pub.dev/documentation/msal_js/latest/msal_js/UserAgentApplication-class.html
import store from "@/store/index.js";
import router from "@/router/index.js";
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
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: true
      }
    };
    // instantiate MSAL
    this.app = new Msal.UserAgentApplication(this.msalConfig);
  }

  loginPopup() {
    this.app
      .loginPopup()
      .then(result => {
        console.log("success", result);
        store.commit("sigin", result);
        router.push("/");
      })
      .catch(error => {
        console.log("login error", error);
      });
  }

  loginRedirect() {
    this.app.handleRedirectCallback((error, result) => {
      if (error) {
        console.log("login error", error);
      } else {
        console.log("success", result);
      }
    });

    const loginRequest = { scopes: msalConfig.scopes };
    this.app.loginRedirect(loginRequest);
  }

  logout() {
    this.app.logout();
  }

  getUser() {
    return this.app.getAccount();
  }

  reflesh() {
    const accounts = this.app.getAccount();
    if (accounts) {
      store.commit("sigin", accounts);
    } else {
      store.commit("signout");
    }
  }
}
