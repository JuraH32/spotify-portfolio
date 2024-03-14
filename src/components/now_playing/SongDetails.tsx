import React from "react";

const SongDetails = () => {
    return (
        <div className="flex flex-row items-center">
            <img
                id="album-cover"
                src="https://via.placeholder.com/300"
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

export default SongDetails;