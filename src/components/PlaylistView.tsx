// PlaylistView.tsx
import React from "react";
import {Playlist} from "../types";
import SongView from "./SongView";
import {useParams} from "react-router-dom";
import PlaylistImage from "./PlaylistImage";

const PlaylistView = ({playlists}: { playlists: Playlist[] }) => {
    let {playlistId} = useParams()
    if (playlistId === undefined) {
        playlistId = "0"
    }
    const playlist = playlists[parseInt(playlistId)]

    return (
        <div className="bg-spotify-gray p-4 rounded-md flex flex-col mt-14">
            <div className="flex flex-row items-center">
                <div className="h-48 w-48 border-white border-2 rounded-sm min-w-48">
                    <PlaylistImage playlist={playlist}/>
                </div>
                <div className="flex flex-col items-start justify-center h-full ml-4">
                    <h1 className="text-5xl font-semibold text-white">{playlist.name}</h1>
                    <h3 className="text-lg font-semibold text-white">{playlist.description}</h3>
                </div>
            </div>
            <div className="border-b-gray-100 border-b-2 m-2">
                <div className="flex justify-between items-center py-2 px-4 ml-10">
                    <div className="w-1/3">
                        <h3 className="text-lg font-semibold text-white text-left">Name</h3>
                    </div>
                    <div className="w-1/3">
                        <h3 className="text-lg font-semibold text-white text-left">Skills</h3>
                    </div>
                    <div className="w-1/3 text-center">
                        <h3 className="text-lg font-semibold text-white">Time</h3>
                    </div>
                </div>
            </div>
            <div>
                {playlist.songs.map((song) => (
                    <SongView song={song}/>
                ))}
            </div>
        </div>
    );
};

export default PlaylistView;