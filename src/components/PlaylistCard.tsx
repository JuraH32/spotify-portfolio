import React from "react";
import {Playlist} from "../types";
import PlaylistImage from "./PlaylistImage";

const PlaylistCard = (
    {playlist, onClick}: { playlist: Playlist, onClick: () => void}
) => {
    const imageUrl = "https://via.placeholder.com/300";
    const title = playlist.name;
    const description = playlist.description;

    return (
        <div className="relative rounded-lg overflow-hidden bg-spotify-gray-light hover:bg-spotify-gray-lightest" onClick={onClick}>
            <div
                className="aspect-square md:aspect-w-1 md:aspect-h-1/2 lg:aspect-w-1 lg:aspect-h-3/4 xl:aspect-w-1 xl:aspect-h-4/5 p-4">
                <PlaylistImage playlist={playlist}/>
            </div>
            <div className="p-4">
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="text-gray-600 mt-2">{description}</p>
            </div>
        </div>
    );
};

export default PlaylistCard;
