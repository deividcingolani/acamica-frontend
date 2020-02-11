import Link from "next/link";
import Head from "next/head";
import Auth from "../lib/Auth";
import { isLoggedIn } from "../lib/isLoggedIn";
import Router from "next/router";
import Error from "next/error";

export function Layout({ title, children, requireLogin }) {
  const auth = new Auth();
  const isLogged = isLoggedIn();
  return (
    <React.Fragment>
      {requireLogin && !isLogged ? (
        <Error statusCode={401} />
      ) : (
        <div className="root">
          <Head>
            <title>Acamica Students</title>
          </Head>
          <header>

            <Link href="/">
              <a>Home</a>
            </Link>
            {isLogged && (
              <Link href="/payments">
                <a>Payments Information</a>
              </Link>
            )}
            {isLogged && (
              <li className="list">
                <a className="logout" onClick={() => auth.logout()}>
                  Logout
                </a>
              </li>
            )}

            {!isLogged && (
              <li className="list">
                <a className="login" onClick={() => auth.login()}>
                  Login / Register
                </a>
              </li>
            )}
          </header>

          <h1>{title}</h1>
          {children}

          <footer>Acamica &copy; {new Date().getFullYear()}</footer>
          <style jsx>{`
            .root {
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
            }
            header {
              width: 100%;
              display: flex;
              justify-content: space-around;
              padding: 1em;
              font-size: 1.2rem;
              background: #005782;
            }
            header a {
              color: darkgrey;
              text-decoration: none;
            }
            header a:hover {
              font-weight: bold;
              color: lightgrey;
            }
            .login,
            .logout {
              text-decoration: none;
            }
            footer {
              padding: 1em;
            }
            .list {
              list-style: none;
            }
            .back-button {
              font-size: 0.9rem;
              padding-right: 1em;
              cursor: pointer;
            }
          `}</style>
          <style global jsx>{`
            body {
              margin: 0;
              font-size: 110%;
              background: #f0f0f0;
            }
          `}</style>
        </div>
      )}
    </React.Fragment>
  );
}
