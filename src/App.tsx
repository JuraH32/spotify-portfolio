import React from 'react';
import logo from './logo.svg';
import './App.css';
import NowPlayingBar from "./components/now_playing/NowPlayingBar";
import YourLibrary from "./components/YourLibrary";
import Navigation from "./components/Navigation";
import MainWidget from "./components/MainWidget";

function App() {
  return (
      <>
          <div className="App min-h-screen flex flex-col bg-black">
              <div className="flex-grow flex flex-row">
                  <div className="w-1/5 m-2 mb-0 flex flex-col">
                      <Navigation/>
                      <YourLibrary/>
                  </div>
                  <MainWidget/>
              </div>
              <footer>
                  <NowPlayingBar/>
              </footer>
          </div>

      </>
  );
}

export default App;
