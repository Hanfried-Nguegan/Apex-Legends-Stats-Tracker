import Head from "next/head";
import Banner from "../components/Banner";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Apex tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Banner />
      </main>
    </div>
  );
}
