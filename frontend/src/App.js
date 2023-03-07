import './style/App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/header';
import SideMenu from './components/sideMenu';
import { useState } from 'react';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import CreatePostPage from './components/pages/CreatePostPage';
import PostPage from './components/pages/PostPage';
import Footer from './components/footer';

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
      <Route path='/create' element={<CreatePostPage/>}/>
      <Route path='/post/:name/:id' element={<PostPage/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
