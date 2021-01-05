import "@styles/main.scss";

import { Provider } from "react-redux";
import App from "next/app";
import withRedux from "next-redux-wrapper";
import { DefaultSeo } from "next-seo";
import Router from "next/router";
import NProgress from "nprogress";
import { initStore } from "../src/store/store";

NProgress.configure({ showSpinner: true });

Router.onRouteChangeStart = () => {
  NProgress.start();
  document.body.classList.add("loading");
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
  document.body.classList.remove("loading");
};

Router.onRouteChangeError = () => {
  NProgress.done();
  document.body.classList.remove("loading");
};

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const { originalUrl } = ctx.req || {};
    return {
      pageProps: Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {},
      originalUrl,
    };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <>
        <DefaultSeo
          title="Apollo"
          description="Apollo Apps Backoffice"
          openGraph={{
            type: "website",
            locale: "en_IE",
            url: "",
            site_name: "",
          }}
        />
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </>
    );
  }
}

export default withRedux(initStore)(MyApp);
