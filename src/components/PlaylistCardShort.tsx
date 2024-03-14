import React from "react";
import {Playlist} from "../types";
import PlaylistImage from "./PlaylistImage";

const PlaylistCardShort = (
    {playlist, onClick}: { playlist: Playlist, onClick: () => void }
) => {
    return (
        <button className="flex flex-row items-center hover:bg-spotify-gray-lighter h-16" onClick={onClick}>
            <div className="aspect-square p-2 h-full items-center">
                <PlaylistImage playlist={playlist}/>
            </div>
            <div id="song-and-artist-name">
                <h3 className="text-white font-bold text-left">{playlist.name}</h3>
                <p className="text-gray-400 text-left">{playlist.description}</p>
            </div>
        </button>
    )
}

export default PlaylistCardShort;