import React from "react";
import {Playlist} from "../types";

const PlaylistImage = ({playlist}: { playlist: Playlist }) => {
    //Create a new image using the images from the songs in the playlist
    const imageUrls = playlist.songs.map(song => song.imageUrl);

    const numImages = imageUrls.length;

    if (numImages === 0) {
        return <div className="bg-spotify-gray-lightest w-full h-full"></div>
    }

    //Create a grid of images, either 1x1 or 2x2 with 3 dots in the lower right corner
    let grid = [];
    if (numImages === 1) {
        grid.push([<img src={imageUrls[0]} alt=""/>])
    } else {
        for (let i = 0; i < 2; i++) {
            let row = [];
            for (let j = 0; j < 2; j++) {
                if (i * 2 + j < numImages && i * 2 + j < 3) {
                    row.push(<img src={imageUrls[i * 2 + j]} alt=""/>)
                } else {
                    break;
                }
            }
            if (i === 1) {
                row.push(<div
                    className="flex justify-center items-center text-white text-center w-full">{numImages > 3 ? "..." : " "}</div>)
            }
            grid.push(row);
        }
    }
    if (numImages === 1) {
        return (
            <div className="flex flex-col">
                {grid[0][0]}
            </div>
        )
    } else {
        return (
            <div className="grid grid-cols-2 grid-rows-2 gap-0 w-full h-full">
                {grid.map((row, i) => (
                    row.map((image, j) => (
                        <div className="flex flex-col" key={j}>
                            {image}
                        </div>
                    ))
                ))}
            </div>
        )
    }
}

export default PlaylistImage;