// import logo from './logo.svg';
import './App.css';
import Container from './components/Partials/Container';
import { Routes, Route, NavLink } from 'react-router-dom';
import MoviesPage from './pages/MoviesPage';
import TennisPage from './pages/TennisPage';
import MainPage from './pages/MainPage';
import CounterPage from './pages/CounterPage';
import ShoppingList from './pages/ShoppingList.js';
import ToDoList from './pages/ToDoList.js';
import StudentPage from './pages/StudentPage';

function App() {

  console.log(window.location.pathname);
  return (
    <>
      <nav>
        <ul className='navigation'>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/css/tennis'>Tennis page</NavLink></li>
          <li><NavLink to='/movies'>Movies page</NavLink></li>
          <li><NavLink to='/counter'>Counter page</NavLink></li>
          <li><NavLink to='/shopping'>Shopping list</NavLink></li>
          <li><NavLink to='/to-do-list'>To do list</NavLink></li>
          <li><NavLink to='/students'>Student page</NavLink></li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/css' element={<h1>CSS</h1>}/>
        <Route path='/movies' element={<MoviesPage/>}/>
        <Route path='/css/tennis' element={<TennisPage/>}/>
        <Route path='/counter' element={<CounterPage/>}/>
        <Route path='/shopping' element={<ShoppingList/>}/>
        <Route path='/to-do-list' element={<ToDoList/>}/>
        <Route path='/students' element={<StudentPage/>}/>
      </Routes>
    </>
  )
}

export default App;
