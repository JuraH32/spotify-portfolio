import React, {useEffect, useRef, useState} from "react";
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
    const mainWidgetRef = useRef(null);
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        const mainWidgetElement = mainWidgetRef.current;

        if (!mainWidgetElement) {
            return;
        }
        const handleScroll = () => {
            // @ts-ignore
            const currentScrollPos = mainWidgetElement.scrollTop;
            // @ts-ignore
            const startFade = window.innerHeight * 0.1;
            const scrollUntilOpaque = window.innerHeight * 0.2;
            const opacity = Math.round((currentScrollPos - startFade) / scrollUntilOpaque * 20) * 5;
            setOpacity(opacity);
        };

        // @ts-ignore
        mainWidgetElement.addEventListener("scroll", handleScroll);
        // @ts-ignore
        return () => mainWidgetElement.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div ref={mainWidgetRef} className="rounded-md mt-2 mr-2 grow w-4/5 overflow-y-auto bar z-20">
            <Header opacity={opacity}/>
            <div className="flex flex-col w-full grow bg-spotify-gray rounded-md rounded-t-none p-5 z-0 h-full">
                <Routes>
                    <Route path="/" element={<Home playlists={playlists}/>}/>
                    <Route path="/playlist/:playlistId" element={<PlaylistView playlists={playlists}/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default MainWidget;