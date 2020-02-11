import React, { Component } from "react";
import Auth from "../../lib/Auth";
import Router from "next/router";
import {Layout} from "../../components/Layout";

const auth = new Auth();

export default class Callback extends Component {
  componentDidMount() {
    var user_details = auth.extractInfoFromHash();
    auth.handleAuthentication().then(res => {
      if (!res) {
        window.location.replace("/");
      } else {
        Router.push("/payments");
      }
    });
  }

  render() {
    return (
      <Layout>
        <h5>Wait while redirecting to the page</h5>
      </Layout>
    );
  }
}
