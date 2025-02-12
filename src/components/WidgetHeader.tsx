import React from "react";
import HistoryNavigation from "./HistoryNavigation";

const WidgetHeader = ({opacity}: {opacity: number}) => {
    return (
        <div className={`fixed flex r-0 w-full flex-row items-center justify-between p-4 bg-gray-900 rounded-t-md z-10`} style={{backgroundColor: `rgba(12, 12, 12, ${opacity}%)`}}>
            <HistoryNavigation/>
            <div className="flex flex-row items-center">
                <p className="text-white mr-4">Username</p>
                <img
                    id="user-avatar"
                    src="https://via.placeholder.com/300"
                    alt="User Avatar"
                    className="w-12 h-12 rounded-full"
                />
            </div>
        </div>
    )
}

export default WidgetHeader;