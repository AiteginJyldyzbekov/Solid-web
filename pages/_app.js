import Head from "next/head";
import Header from "../components/common/header/Header.js";
import "../styles/globals.css";
import "../styles/style.css";
import "../styles/courses.css";
import "../styles/dashboard.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import firebase from "../config/firebase.js";
import WithAuth from "../hoks/privateAuth.js";

function MyApp({ Component, pageProps }) {
  if (typeof window === "object") {
    (function (w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != "dataLayer" ? "&l=" + l : "";
      j.async = true;
      j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, "script", "dataLayer", "GTM-TPKSSBV");
  }

  const { pathname } = useRouter();
  const [isIncludeAdmin, setIsIncludeAdmin] = useState();
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        setIsAuth(user?.toJSON());
      } else {
        setIsAuth(false);
      }
    });
  }, []);

  useEffect(() => {
    const arr = pathname.split("/");
    const check = arr.includes("admin") && arr.length > 2;
    setIsIncludeAdmin(check);
  }, [pathname]);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossOrigin="anonymous"
        />
      </Head>
      {isIncludeAdmin || <Header />}
      {isIncludeAdmin ? (
        <WithAuth
          Component={() => <Component {...pageProps} isAuth={isAuth} />}
          isAuth={isAuth}
        />
      ) : (
        <Component {...pageProps} isAuth={isAuth} />
      )}

      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-TPKSSBV"
          height="0"
          width="0"
          style="display:none;visibility:hidden"
        ></iframe>
      </noscript>
    </>
  );
}

export default MyApp;
