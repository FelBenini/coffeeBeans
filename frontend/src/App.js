import './style/App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/header';
import SideMenu from './components/sideMenu';
import { useState } from 'react';

function App() {
  const [sideMenuState, setSideMenuState] = useState(false)
  return (
    <BrowserRouter>
    <Header setSideMenu={setSideMenuState}/>
    <SideMenu drawerState={sideMenuState} setDrawerState={setSideMenuState}/>
    <Routes>
      <Route path='/' element=''/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
