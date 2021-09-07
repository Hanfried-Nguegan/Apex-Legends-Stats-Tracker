import Head from "next/head"
import { useRouter } from "next/router"
import axios from "axios"
import useSWR from "swr"
import PlayerDisplay from "@/components/player/playerDisplay"

export default function PlayerPage() {

    const router = useRouter()

    const { id } = router.query

    const fetcher = url => axios.get(url).then(res => res.data)

    const { data: player, error } = useSWR(() => "/api/apex/playstation/" + id, fetcher)

    if (error) {
        return (
            <>
                <Head>Player | Error</Head>
                <div>Error encountered while retrieving info ..</div>
            </>
        )
    }

    if (!player) {
        return (
            <>
                <Head>Player | Loading...</Head>
                <div>Loading...</div>
            </>
        )
    }

    return (
        <>
            <Head>
                <title>Player | {player.platformInfo.platformUserId}</title>
            </Head>
            <div className="container mx-auto px-4">
                <div className="flex flex-row justify-center p-5">
                    <div
                        className="flex flex-col rounded shadow-lg contrast-125 drop-shadow p-5"
                    >
                        <div className="py-4">
                            <img alt="player_img" className="h-100 w-100 object-cover rounded" src={player.platformInfo.avatarUrl} />
                        </div>
                        <PlayerDisplay
                            title="Level"
                            value={player.segments[0].stats.level.displayValue}
                        />
                        <PlayerDisplay
                            title="Active Legend"
                            value={player.metadata.activeLegendName}
                        />
                        <PlayerDisplay
                            title="Platform User Id"
                            value={player.platformInfo.platformUserId}
                        />
                        {/* Bad Practise below, this is just for example sake .. Learn how to iterate arrays */}
                        <PlayerDisplay
                            title="Kills"
                            value={player.segments[0].stats.kills.displayValue}
                        />
                        <PlayerDisplay
                            title="Damage"
                            value={player.segments[0].stats.damage.displayValue}
                        />
                        <PlayerDisplay
                            title="Rank"
                            value={player.segments[0].stats.arenaRankScore.metadata.rankName}
                        />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row space-x-4">
                    <div>
                        <img
                            alt="legend_img"
                            className="h-100 w-100 object-cover rounded"
                            src={player.segments[1].metadata.imageUrl}
                        />
                    </div>
                    <div>
                        <img
                            alt="legend_img2"
                            className="h-100 w-100 object-cover rounded"
                            src={player.segments[1].metadata.tallImageUrl}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}