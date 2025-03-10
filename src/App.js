// import logo from './logo.svg';
import './App.css';
import { FaHome } from "react-icons/fa";
//라우팅
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Hello from './01/Hello';
import MyDiv1 from './02/MyDiv1';
import CardMain from './03/CardMain';
import BoxOffice from './04/BoxOffice';

function App() {
  return (
    <BrowserRouter>
      <div className='App-header'>
        <main className='flex flex-col justify-center items-center
                     w-full md:w-4/5
                     h-full'>
          <header className='w-full h-16 bg-slate-200
                         flex justify-between
                         p-5 text-slate-800'>
            <h1 className='text-xl font-bold'>리액트실습</h1>

            <ul className='text-lg font-bold
                         flex justify-center items-center'>
              <li className='p-3 rounded-sm
                            hover:text-blue-700 hover:cursor-pointer'>
                            <Link to='/'>시계</Link>
              </li>
              <li className='p-3 rounded-sm
                           hover:text-blue-700 hover:cursor-pointer'>
                            <Link to='/probs'>probs</Link>
              </li>
              <li className='p-3 rounded-sm
                           hover:text-blue-700 hover:cursor-pointer'>
                            <Link to='/card'>card</Link>
              </li>
              <li className='p-3 rounded-sm
                           hover:text-blue-700 hover:cursor-pointer'>
                            <Link to='/box'>BoxOffice</Link>
              </li>

            </ul>
            <div className=' hover:text-blue-700'>
            <Link to='/'><FaHome /></Link>
            </div>
          </header>
          <div className="w-full grow
                    flex flex-col justify-center items-center">
            <Routes>
              <Route path='/' element={<Hello />} />            
              <Route path='/probs' element={<MyDiv1 />} />
              <Route path='/card' element={<CardMain />} />   
              <Route path='/box' element={<BoxOffice />} /> 
              </Routes>
            
          </div>
          <footer className='w-full h-16 
                      flex justify-center items-center 
                      bg-black text-slate-100'>
            <p className='text-sm font-bold'>
              2024 여름 계절학기 소프트웨어융합기초1
            </p>
          </footer>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;