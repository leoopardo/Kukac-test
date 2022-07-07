import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Home } from './pages/home/home';
import { NavBar } from './components/navBar/navBar';
import { Footer } from './components/footer/footer';
import { Palindromo } from './pages/palindromo/palindromo';
import { Troco } from './pages/troco/troco';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/solucao-1' element={<Palindromo/>}/>
        <Route path='/solucao-2' element={<Troco/>}/>
        <Route path='/solucao-3' element={<Home/>}/>
        <Route path='/solucao-4' element={<Home/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
