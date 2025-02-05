import React, {useEffect} from 'react';
import {HomeIcon, HomeIconFilled, SearchIcon} from "./Icons";
import NavigationButton from "./NavigationButton";
import {useNavigate} from "react-router-dom";
import {publicURL} from "../consts";

const Header = () => {
    const navigate = useNavigate()
    const [homeIcon, setHomeIcon] = React.useState(<HomeIcon/>);


    // useEffect check if window.location.pathname changes
    useEffect(() => {
        setHomeIcon(window.location.pathname === '/' ? <HomeIconFilled/> : <HomeIcon/>);
        // eslint-disable-next-line
    }, [window.location.pathname]);

    return <div className="bg-black text-white flex items-center justify-between px-4">
        <div className="flex items-center gap-3">
            <div className="bg-white p-1 rounded-full">
                <img
                    src="/portfolio-logo.png"
                    alt="Portofilio Logo"
                    className="w-6 h-6"
                />
            </div>
        </div>
        <div className="flex items-center gap-4 w-1/3">
            <NavigationButton onClick={() => navigate("/")} icon={homeIcon} className="p-2 bg-gray-800 rounded-full"/>
            <div className="flex items-center bg-gray-800 rounded-full p-2 w-full">
                <SearchIcon/>
                <input
                    type="text"
                    placeholder="What do you want to know?"
                    className="bg-transparent text-white flex-1 outline-none px-2"
                />
            </div>
        </div>
        <div className="flex items-center gap-4">
            <NavigationButton className="p-2 bg-gray-800 rounded-full" icon={<img
                src={publicURL("/images/user-image.jpg")}
                alt="User"
                className="w-8 h-8 rounded-full object-cover"
            />} onClick={() => {
            }}/>
        </div>
    </div>;
}

export default Header;