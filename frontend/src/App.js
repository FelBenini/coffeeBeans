import './style/App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/header';
import SideMenu from './components/sideMenu';
import { useState } from 'react';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';

function App() {
  const [sideMenuState, setSideMenuState] = useState(false)
  return (
    <BrowserRouter>
    <Header setSideMenu={setSideMenuState}/>
    <SideMenu drawerState={sideMenuState} setDrawerState={setSideMenuState}/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
