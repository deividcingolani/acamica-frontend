import React from "react";
import App from "next/app";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <React.Fragment>
        <Head>
          <title>My page</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>
        <Component {...pageProps} />
      </React.Fragment>
    );
  }
}
