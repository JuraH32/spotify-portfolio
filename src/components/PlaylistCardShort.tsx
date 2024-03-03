import React from "react";
import {Playlist} from "../types";

const PlaylistCardShort = ({playlist}: {playlist: Playlist}
) => {
    return (
        <div className="flex flex-row items-center">
            <img
                id="album-cover"
                src="/path/to/album-cover.jpg"
                alt="Album Cover"
                className="w-12 h-12 mr-4"
            />
            <div id="song-and-artist-name">
                <h3 className="text-white font-bold">Song Name</h3>
                <p className="text-gray-400">Artist Name</p>
            </div>
        </div>
    )
}

export default PlaylistCardShort;