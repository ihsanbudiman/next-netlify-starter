import Head from 'next/head';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';

export default function Template({ children }) {
  return (
    <>
      <div className="container">
        <Head>
          <title>Next.js Starter!</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
