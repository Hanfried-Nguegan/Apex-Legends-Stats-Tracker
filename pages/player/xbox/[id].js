import React, { useState } from "react";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import Head from "next/head";
import { useRouter } from "next/router";
import axios from "axios";
import useSWR from "swr";
import Header from "@/components/Header";
import PlayerBanner from "@/components/player/PlayerBanner";
import PlayerPlatform from "@/components/player/PlayerPlatform";
import PlayerLegends from "@/components/player/PlayerLegends";

const override = css`
  display: block;
  margin: 2;
  border-color: red;
`;

export default function PlayerPage() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");
  const router = useRouter();

  const { id } = router.query;

  const fetcher = (url) => axios.get(url).then((res) => res.data);

  const { data: player, error } = useSWR(() => "/api/apex/xbox/" + id, fetcher);
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
        <div className="flex items-center">
          <ClipLoader
            color={color}
            loading={loading}
            css={override}
            size={25}
          />
          <p>Loading</p>
        </div>
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
      <main className="bg-blackshark min-h-screen overflow-hidden ">
        <div className="lg:max-w-[90rem] lg:mx-auto max-w">
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
                kills={item.stats.kills?.displayValue}
                headshots={item.stats.headshots?.displayValue}
                damage={item.stats.damage?.displayValue}
                wins={item.stats.winningKills?.value}
                killLeader={item.stats.killsAsKillLeader?.displayValue}
                sniperKills={item.stats.sniperKills?.displayValue}
              />
            ))}
          </div>
          <div></div>
        </div>
      </main>
    </>
  );
}
