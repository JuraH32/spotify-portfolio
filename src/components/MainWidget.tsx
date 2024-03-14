import React from "react";
import Header from "./Header";
import {Route, Routes} from "react-router-dom";
import {Playlist} from "../types";
import Home from "./Home";
import PlaylistView from "./PlaylistView";

const MainWidget = (
    {playlists}: {
        playlists: Playlist[],
    }
) => {
    return (
        <div className="flex flex-col rounded-md mt-2 mr-2 grow w-4/5">
            <Header/>
            <div className="flex flex-col w-full grow bg-spotify-gray rounded-md rounded-t-none p-5 overflow-y-auto bar">
                <Routes>
                    <Route path="/" element={<Home playlists={playlists}/>}/>
                    <Route path="/playlist/:playlistId" element={<PlaylistView playlists={playlists}/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default MainWidget;