import React from "react";

const NavigationButton = ({onClick, icon, className}: { onClick: () => void, icon: JSX.Element, className?: string }) => {
    return (
        <button onClick={onClick} className={className}>
            <>
                {icon}
            </>
        </button>
    );
}

export default NavigationButton;