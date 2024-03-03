import React from "react";
import {Playlist} from "../types";
import PlaylistCardShort from "./PlaylistCardShort";

const YourLibrary = () => {
    const playlists: Playlist[] = [
        {
            name: "Playlist 1",
            description: "Description 1",
            songs: [
                {
                    name: "Song 1",
                    description: "Description 1",
                    duration: 100
                },
                {
                    name: "Song 2",
                    description: "Description 2",
                    duration: 200
                }
            ]
        },
        {
            name: "Playlist 2",
            description: "Description 2",
            songs: [
                {
                    name: "Song 3",
                    description: "Description 3",
                    duration: 300
                },
                {
                    name: "Song 4",
                    description: "Description 4",
                    duration: 400
                }
            ]
        }
    ];
    return (
        <div className="flex flex-col items-center bg-gray-800 mt-2 rounded-md grow">
            <h1>Your Library</h1>
            {playlists.map((playlist: Playlist) => {
                return (
                    <PlaylistCardShort playlist={playlist}/>
                )
            })}
        </div>
    )
}

export default YourLibrary;
