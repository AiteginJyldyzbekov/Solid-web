import Head from 'next/head';
import Footer from '../components/common/footer/Footer.js';
import HomePage from '../components/pages/HomePage.js';

export default function Home() {

  return (
    <div>
      <Head>
        <title>Solid Academy</title>
        <meta name="keywords" content="
          Solid, Solid Academy, Курсы по программированию, 
          Курсы по программированию Бишкек, Курсы,
          Программирование"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage/>
      <Footer />
    </div>
  )
}