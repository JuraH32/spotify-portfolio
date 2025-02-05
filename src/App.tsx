import React from 'react';
import './style/App.css';
import NowPlayingBar from "./components/now_playing/NowPlayingBar";
import SideYourLibrary from "./components/SideYourLibrary";
import MainWidget from "./components/MainWidget";
import {mockPlaylists} from "./consts";
import {BrowserRouter as Router} from "react-router-dom";
import Header from "./components/Header";

function App() {
    const [playlists, ] = React.useState(mockPlaylists);
    return (
        <Router>
            <div className="App relative flex flex-col h-screen bg-black">
                {/* Header */}
                <header className="h-1/12 rounded-md my-1">
                    <Header/>
                </header>
                {/* Main content area */}
                <div className="flex flex-row flex-grow overflow-y-auto">
                    {/* Left panel - Navigation */}
                    <SideYourLibrary playlists={playlists}/>
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
