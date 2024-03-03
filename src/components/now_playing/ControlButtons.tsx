import React from "react";

const ControlButtons = () => {
    return (
        <div className="flex items-center justify-center space-x-4 h-1/4">
            <button className="text-white focus:outline-none">
                <svg width="32" height="32" version="1.1" viewBox="0 0 8.4667 8.4667"
                     xmlns="http://www.w3.org/2000/svg">
                    <g strokeLinejoin="round"
                       className="fill-white stroke-white hover:fill-gray-300 hover:stroke-gray-300">
                        <rect x="1.7693" y="1.4982" width="1.1415" height="5.7503" strokeWidth=".265"/>
                        <path transform="matrix(-.99689 0 0 1.111 8.7191 -.11223)"
                              d="m6.2355 4.0095-4.4395 2.5917-0.024714-5.1406" strokeWidth=".265"/>
                    </g>
                </svg>
            </button>
            <button className="text-white focus:outline-none">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    className="w-10 fill-white hover:fill-gray-300"
                >
                    <circle cx="50" cy="50" r="40"/>
                    <polygon points="35,25 75,50 35,75" fill="#191414"/>
                </svg>
            </button>
            <button className="text-white focus:outline-none">
                <svg width="32" height="32" version="1.1" viewBox="0 0 8.4667 8.4667"
                     xmlns="http://www.w3.org/2000/svg">
                    <g transform="matrix(-1 0 0 1 8.7222 0)" strokeLinejoin="round"
                       strokeWidth=".265" className="fill-white stroke-white hover:fill-gray-300 hover:stroke-gray-300">
                        <rect x="1.7693" y="1.4982" width="1.1415" height="5.7503"/>
                        <path transform="matrix(-.99689 0 0 1.111 8.7191 -.11223)"
                              d="m6.2355 4.0095-4.4395 2.5917-0.024714-5.1406"/>
                    </g>
                </svg>
            </button>
        </div>
    );
}

export default ControlButtons;
