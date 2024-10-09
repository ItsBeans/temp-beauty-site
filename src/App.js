
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NoPage from './NoPage';


export default function App() {
  return (
    
    <div>
        <Router>
          <Routes>
            <Route index element={<Home/>}/>
            
            <Route path="*" element={<NoPage/>}/>

          </Routes>
        </Router>
    </div>
   




  )
}


