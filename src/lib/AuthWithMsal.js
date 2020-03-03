import * as Msal from "msal"; // https://pub.dev/documentation/msal_js/latest/msal_js/UserAgentApplication-class.html
import msalConfig from "@/config/maslConfig.js";
import store from "@/store/index.js";
import router from "@/router/index.js";

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
    this.reflesh();
  }

  SignInPopup() {
    this.app
      .loginPopup()
      .then(result => {
        console.log("success", result);
        store.commit("SignIn", result);
        router.push(
          "/",
          () => {},
          () => {}
        );
      })
      .catch(error => {
        console.log("SignIn error", error);
      });
  }

  SignInRedirect() {
    this.app.handleRedirectCallback((error, result) => {
      if (error) {
        console.log("SignIn error", error);
      } else {
        console.log("success", result);
      }
    });

    const loginRequest = { scopes: msalConfig.scopes };
    this.app.loginRedirect(loginRequest);
  }

  SignOut() {
    // sign out後、ページがリロードされる
    this.app.logout();
  }

  getAccount() {
    return this.app.getAccount();
  }

  reflesh() {
    const accounts = this.app.getAccount();
    if (accounts) {
      store.commit("SignIn", accounts);
    } else {
      store.commit("SignOut");
    }
  }
}
