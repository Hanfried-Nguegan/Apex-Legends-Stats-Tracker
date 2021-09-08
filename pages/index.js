import Header from "@/components/Header";
import Head from "next/head";
import Banner from "../components/Banner";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Apex tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Banner />
      </main>
    </div>
  );
}
