// SongView.tsx
import React, {useEffect, useState} from "react";
import {Song, TagType} from "../types";
import DescriptionView from "./Description";
import Tag from "./Tag";

const SongView = ({song}: { song: Song }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [tags, setTags] = useState<TagType[]>([]);

    useEffect(() => {
        if (song.description.tags) {
            const showedTags = song.description.tags.slice(0, 3);
            setTags(showedTags);
        } else {
            setTags([]);
        }
    }, [song.description.tags]);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <button key={song.name}
                className={`flex flex-col w-full hover:bg-spotify-gray-lightest items-center p-2 rounded-lg ${isOpen ? 'expanded' : ''}`}
                onClick={toggleOpen}>
            <div className="flex flex-row items-center w-full">
                <img
                    src={song.imageUrl}
                    alt="Song Cover"
                    className="w-10 h-10 mr-4 rounded-md"
                />
                <div className="flex flex-row items-center justify-between w-full">
                    <div className="flex flex-col w-1/3">
                        <div className="flex flex-row items-center">
                            <h3 className="text-lg font-semibold text-white text-left">{song.name}</h3>
                            {song.github && (
                                <a href={song.github} className="ml-2" target="_blank"
                                   onClick={(e) => e.stopPropagation()} rel="noopener noreferrer">
                                    <img
                                        src="https://github.githubassets.com/favicons/favicon-dark.png"
                                        alt="GitHub Logo"
                                        className="w-4 h-4"
                                    />
                                </a>
                            )}
                        </div>
                        <p className="text-white text-left">{song.artist}</p>
                    </div>
                    <div className="flex flex-row items-center justify-start flex-wrap space-x-2 w-1/3">
                        {tags.map((tag, index) => (
                            <Tag tag={tag} key={index}/>
                        ))}
                    </div>
                    <p className="text-white w-1/3 text-right">{song.location && `${song.location}, `} {song.lengthStart && `${song.lengthStart} - ${song.lengthEnd}`}</p>
                </div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className={`w-6 h-6 text-white m-2 transition-transform duration-300 transform ${isOpen ? "rotate-180" : ""}`}
                >
                    <path
                        fillRule="evenodd"
                        d="M10 18a1 1 0 01-.707-.293l-7-7a1 1 0 011.414-1.414L10 15.586l6.293-6.293a1 1 0 011.414 1.414l-7 7A1 1 0 0110 18z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>
            {isOpen && (
                <DescriptionView description={song.description}/>
            )}
        </button>
    )
}

export default SongView;