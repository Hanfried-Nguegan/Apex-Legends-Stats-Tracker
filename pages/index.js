import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Apex tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <section>
          <Banner />
        </section>
        <section>
          {/* Legend Meta */}
          {/* LeaderBoard */}
        </section>
      </main>
      <footer>{/* Footer Component */}</footer>
    </div>
  );
}
