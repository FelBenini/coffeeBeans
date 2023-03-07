import './style/App.scss';
import { Routes, Route, useNavigate } from 'react-router-dom'
import Header from './components/header';
import SideMenu from './components/sideMenu';
import { useState, useContext } from 'react';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import CreatePostPage from './components/pages/CreatePostPage';
import PostPage from './components/pages/PostPage';
import Footer from './components/footer';
import ScrollToTop from './components/ScrollToTop';
import { UserContext } from './UserContext';
import { Dialog, Button } from '@mui/material';
import { BiLogOut } from 'react-icons/bi'

function App() {
  const navigate = useNavigate()
  const [sideMenuState, setSideMenuState] = useState(false)
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const { setUserInfo } = useContext(UserContext)
  async function logout() {
    await fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST'
    })
    setUserInfo(null)
    navigate('/')
    setOpen(false)
  }
  return (
    <>
      <ScrollToTop />
      <Header setSideMenu={setSideMenuState} showDialog={setOpen} />
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <span id='logoutDialog'>
          <BiLogOut/>
          <h3>Are you sure you want to logout?</h3>
          <Button variant='contained' onClick={logout}>YES</Button>
        </span>
      </Dialog>
      <SideMenu drawerState={sideMenuState} setDrawerState={setSideMenuState} />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/create' element={<CreatePostPage />} />
        <Route path='/post/:name/:id' element={<PostPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
