
import './App.scss';
import Home from './components/home/home';
import Report from './components/report/report'; 
import Input from './components/input/input'
import { BrowserRouter as RouterOutlet, Route, Routes, Navigate } from 'react-router-dom';


function App() {
  return (
    <>
        <div className='main-wrapper'>
          <div className='container'>
          <RouterOutlet>
                  <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/report" element={<Report />}></Route>
                    <Route path="/input" element={<Input />}></Route>
                  </Routes>
            </RouterOutlet>
          </div>
        </div>
    </>
  );
}

export default App;
