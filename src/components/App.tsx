import React from 'react';
import { boringWebsites } from '../data/websites';
import '../styles/App.css';

const App: React.FC = () => {
  const handleClick = () => {
    const randomSite = boringWebsites[Math.floor(Math.random() * boringWebsites.length)];
    chrome.tabs.create({ url: randomSite });
  };

  const buttonText = chrome.i18n.getMessage('buttonText') || '带我去无聊网站！';

  return (
    <div className="app-container">
      <button 
        className="random-button"
        onClick={handleClick}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default App;