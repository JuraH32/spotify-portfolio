import React from "react";
import {Playlist} from "../types";
import YourLibrary from "./YourLibrary";
// import {useNavigate} from "react-router-dom";

const SideYourLibrary = (
    {playlists}: {
        playlists: Playlist[],
    }
) => {
    // const navigate = useNavigate()

    return (
        <nav className="w-2/5 mr-2 flex flex-col flex-grow overflow-y-clip">
            {/*<div className="flex flex-col bg-spotify-gray h-1/6 rounded-md items-center justify-between max-h-full overflow-y-auto p-6">*/}
            {/*    <NavigationButton onClick={() => navigate("/")} text="Home" icon={<HomeIcon/>}/>*/}
            {/*    <NavigationButton onClick={() => {}} text="Search" icon={<SearchIcon/>}/>*/}
            {/*</div>*/}
            <YourLibrary playlists={playlists}/>
        </nav>
    )
}

export default SideYourLibrary;