import Head from 'next/head'
import Header from '../components/common/header/Header.js'
import '../styles/globals.css'
import "../styles/style.css";
import "../styles/courses.css";

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Solid Academy</title>
      <link rel="stylesheet" href="./css/style.css" />
      <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />
    </Head>
    <Header />
    <Component {...pageProps} />
  </>
}

export default MyApp
