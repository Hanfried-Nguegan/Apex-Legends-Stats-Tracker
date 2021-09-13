import Head from "next/head";
import { useRouter } from "next/router";
import axios from "axios";
import useSWR from "swr";

export default function PlayerPage() {
  const router = useRouter();

  const { id } = router.query;

  const fetcher = (url) => axios.get(url).then((res) => res.data);

  const { data: player, error } = useSWR(
    () => "/api/apex/origin/" + id,
    fetcher
  );

  if (error) {
    return (
      <>
        <Head>Player | Error</Head>
        <div>Error encountered while retrieving info ..</div>
      </>
    );
  }

  if (!player) {
    return (
      <>
        <Head>Player | Loading...</Head>
        <div>Loading...</div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Player | {player.platformInfo.platformUserId}</title>
      </Head>
    </>
  );
}
