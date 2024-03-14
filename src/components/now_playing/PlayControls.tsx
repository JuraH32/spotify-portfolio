import React from "react";
import SongProgressBar from "./SongProgressBar";
import ControlButtons from "./ControlButtons";

const PlayControls = () => {
    const duration: number = 180
    return (
        <div className="flex flex-col items-center w-2/5">
            <ControlButtons/>
            <SongProgressBar progress={120} duration={duration}/>
        </div>
    )
}

export default PlayControls;