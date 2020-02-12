import React from "react";
import { Layout } from "../components/Layout";
import { Button } from "react-bootstrap";
import { isLoggedIn } from "../lib/isLoggedIn";
import Auth from "../lib/Auth";
import logoImage from "../public/acamica.jpg";

const Home = () => {
  const auth = new Auth();

  return (
    <div data-test="index">
      <Layout data-test="layout">
        <h1>Acamica Students</h1>
        <h3>The best place for learn IT</h3>

        {!isLoggedIn() &&
          <>
            <Button data-test="button-login" className="loginHome col-md-2" onClick={() => auth.login()}>
              Login/Register
            </Button>
          </>
        }
          <img src={logoImage} alt="logo" id="logoImage" className="logo" />

      </Layout>

      <style jsx>{`
        .hero {
          width: 100%;
          color: #333;
        }
        .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 48px;
        }
        .title,
        .description {
          text-align: center;
        }
        .row {
          max-width: 880px;
          margin: 80px auto 40px;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }
        .card {
          padding: 18px 18px 24px;
          width: 220px;
          text-align: left;
          text-decoration: none;
          color: #434343;
          border: 1px solid #9b9b9b;
        }
        .card:hover {
          border-color: #067df7;
        }
        .card h3 {
          margin: 0;
          color: #067df7;
          font-size: 18px;
        }
        .card p {
          margin: 0;
          padding: 12px 0 0;
          font-size: 13px;
          color: #333;
        }
      `}</style>
    </div>
  );
};
export default Home;