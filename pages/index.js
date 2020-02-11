import React from "react";
import { Layout } from "../components/Layout";
import { Button } from "react-bootstrap";
import { isLoggedIn } from "../lib/isLoggedIn";
import Auth from "../lib/Auth";

const Home = () => {
  const auth = new Auth();

  return (
    <div>
      <Layout />
      <p>
        This is an application for Students of Acamica Where you view and load
        the payments of students.
      </p>

      {!isLoggedIn() && (
        <>
          <p>
            If you want entry in this application
          </p>
          <Button onClick={() => auth.login()}>Login</Button>

        </>
      )}

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
