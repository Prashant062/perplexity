import React, {useState} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './component/Sidebar';
import Home from './component/Home';
import Discover from './component/Discover';
import Library from './component/Library';

function App() {
  const [isSidebarClicked, setSidebarClicked] = useState(false);

  const handleSidebarClick = () => {
    setSidebarClicked(!isSidebarClicked);
  };
  return (
    <div className={`App ${isSidebarClicked ? 'icon-clicked' : ''}`}>
    <BrowserRouter>
      <Sidebar isIconClicked={isSidebarClicked} onIconClick={handleSidebarClick} />
      <Routes>
        <Route path="/" element={<Home  isIconClicked={isSidebarClicked}/>} />
        <Route path="/discover" element={<Discover isIconClicked={isSidebarClicked} />} />
          <Route path="library" element={<Library isIconClicked={isSidebarClicked} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
