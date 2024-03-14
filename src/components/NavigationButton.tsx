import React from "react";

const NavigationButton = ({onClick, text, icon}: { onClick: () => void, text: string, icon: JSX.Element }) => {
    return (
        <button className="text-gray-200 hover:text-white flex flex-row items-center space-x-4 w-full"
                onClick={onClick}>
            <>
                {icon}
                <span className="font-bold">{text}</span>
            </>
        </button>
    );
}

export default NavigationButton;