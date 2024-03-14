import React from 'react';
import './style/App.css';
import NowPlayingBar from "./components/now_playing/NowPlayingBar";
import Navigation from "./components/Navigation";
import MainWidget from "./components/MainWidget";
import {mockPlaylists} from "./consts";
import {BrowserRouter as Router} from "react-router-dom";

function App() {
    const [playlists, ] = React.useState(mockPlaylists);
    return (
        <Router>
            <div className="App relative flex flex-col h-screen bg-black">
                {/* Main content area */}
                <div className="flex flex-row flex-grow overflow-y-auto">
                    {/* Left panel - Navigation */}
                    <Navigation playlists={playlists}/>
                    {/* Right panel - MainWidget */}
                    <MainWidget playlists={playlists}/>
                </div>
                {/* Footer */}
                <footer className="bg-gray-200 h-1/12 rounded-md z-20">
                    <NowPlayingBar/>
                </footer>
            </div>
        </Router>
    );
}


export default App;
