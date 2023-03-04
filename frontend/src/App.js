import './style/App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/header';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element=''/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
