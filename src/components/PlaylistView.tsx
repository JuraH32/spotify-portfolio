import React from "react";
import {Playlist} from "../types";
import SongView from "./SongView";
import {useParams} from "react-router-dom";

const PlaylistView = ({playlists}: { playlists: Playlist[]}) => {
    let {playlistId} = useParams()
    if (playlistId === undefined) {
        playlistId = "0"
    }
    const playlist = playlists[parseInt(playlistId)]

    return (
        <div className="bg-spotify-gray p-4 rounded-md">
            <h2 className="text-xl font-semibold mb-4 text-white">{playlist.name}</h2>
            <div>
                {playlist.songs.map((song) => (
                    <SongView song={song}/>
                ))}
            </div>
        </div>
    );
};

export default PlaylistView;