import React from "react";
import {Playlist} from "../types";
import PlaylistCardShort from "./PlaylistCardShort";
import {useNavigate} from "react-router-dom";
import {LibraryIcon} from "./Icons";

const YourLibrary = (
    {playlists}: {
        playlists: Playlist[]
    }
) => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col bg-spotify-gray mt-2 p-3 gap-y-1 rounded-md grow justify-items-start">
            <div className="flex flex-row p-4 pt-0 space-x-4">
                <LibraryIcon/>
                <h1 className="text-white font-bold">Your Library</h1>
            </div>
            {playlists.map((playlist: Playlist, index: number) => {
                const onClick = () => {
                    navigate(`/playlist/${index}`)
                }
                return (
                    <PlaylistCardShort playlist={playlist} onClick={onClick} key={playlist.name}/>
                )
            })}
        </div>
    )
}

export default YourLibrary;
