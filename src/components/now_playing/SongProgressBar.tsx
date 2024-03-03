import React from "react";
import {secondsToTime} from "../../utils";

const SongProgressBar = ({progress, duration}: {progress: number, duration: number}) => {
    return (
        <div className="flex items-center justify-between w-full">
            <div className="text-white mr-2 text-xs">
                {secondsToTime(progress)}
            </div>
            <div className="bg-gray-800 h-1 flex-1 rounded-2xl">
                <div
                    className="h-full bg-white rounded-2xl"
                    style={{width: `${(progress / duration) * 100}%`}}
                />
            </div>
            <div className="text-white ml-2 text-xs">
                {secondsToTime(duration)}
            </div>
        </div>
    )

}

export default SongProgressBar;