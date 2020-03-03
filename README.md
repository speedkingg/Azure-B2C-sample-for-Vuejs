# Azure-B2C-sample for Vuejs

- `Azure Active Directory B2C`を利用した `vue.js` のログインフォームサンプル。

## 技術要素

- `vuex`: サインイン情報管理
- `vue router`: ルーティング、ナビゲーションガード
- `vuetify`: レイアウト用

## 準備

- `config/maslConfig.template.js`から`config/maslConfig.js`を作成し、`clientId`, `authority`を貼り付ける
- `scopes`はそのままで良い（`loginRedirect()`を明示的に利用する場合に記載する）

## Project setup

```
yarn install
```

### Run

```
yarn run serve
```

## 参考

- [Single-page application: Sign-in and Sign-out](https://docs.microsoft.com/bs-latn-ba/azure/active-directory/develop/scenario-spa-sign-in?tabs=javascript)
- [UserAgentApplication class](https://pub.dev/documentation/msal_js/latest/msal_js/UserAgentApplication-class.html)
- [Vue.js with Azure AD B2C integration](https://sergeydotnet.com/vuejs-with-azure-ad-b2c/)
- [背景画像：Unsplush](https://unsplash.com/)
