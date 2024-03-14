import React from "react";
import {Playlist} from "../types";
import PlaylistCard from "./PlaylistCard";
import {useNavigate} from "react-router-dom";

const Home = ({playlists}: {playlists: Playlist[]}) => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col bg-spotify-gray rounded-md mt-2 mx-auto items-center justify-center scroll-auto">
            <h1 className="text-white text-3xl font-bold mb-4">Made For You</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {playlists.map((playlist: Playlist, index: number) => {
                    const onClick = () => {
                        navigate(`/playlist/${index}`)
                    }
                    return <PlaylistCard playlist={playlist} key={playlist.name} onClick={onClick}/>
                })}
            </div>
        </div>

    )
}

export default Home;