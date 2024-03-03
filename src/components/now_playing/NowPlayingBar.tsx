import React from "react";
import SongDetails from "./SongDetails";
import PlayControls from "./PlayControls";

const NowPlayingBar = () => {
    return (
        <div className="bg-black p-4 flex items-center justify-between h-1/12 rounded-md">
            <SongDetails/>
            <PlayControls/>
            <div className="flex items-center">
                <button className="text-white mr-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                    </svg>
                </button>
                <button className="text-white">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 15l7-7 7 7"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default NowPlayingBar;
