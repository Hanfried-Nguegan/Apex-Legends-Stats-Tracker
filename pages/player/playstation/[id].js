import Head from "next/head";
import { useRouter } from "next/router";
import axios from "axios";
import useSWR from "swr";
import Header from "@/components/Header";
import PlayerBanner from "@/components/player/PlayerBanner";
import PlayerPlatform from "@/components/player/PlayerPlatform";
import PlayerLegends from "@/components/player/PlayerLegends";

export default function PlayerPage() {
  const router = useRouter();

  const { id } = router.query;

  const fetcher = (url) => axios.get(url).then((res) => res.data);

  const { data: player, error } = useSWR(
    () => "/api/apex/playstation/" + id,
    fetcher
  );
  console.log(player);

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
      <Header />
      <Head>
        <title>Player | {player.platformInfo.platformUserId}</title>
      </Head>
      <PlayerBanner
        img={player.segments[1].metadata.bgImageUrl}
        avatarImg={player.platformInfo.avatarUrl}
        views={player.userInfo.pageviews}
        playerName={player.platformInfo.platformUserId}
      />
      <main className="bg-blackshark min-h-screen overflow-hidden">
        <div>
          <PlayerPlatform player={player} />
        </div>
        <div>
          <p className="px-5 mb-3 ml-2 font-semibold text-white text-base">
            Legends Overview
          </p>
          {player.segments.slice(1, player.segments.length).map((item) => (
            <PlayerLegends
              legendImg={item.metadata.imageUrl}
              legendName={item.metadata.name}
            />
          ))}
        </div>
        <div></div>
      </main>
    </>
  );
}
