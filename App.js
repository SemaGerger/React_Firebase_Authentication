import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import SignIn from './components/SignIn';
import Home from './components/Home';
import SignUp from './components/SignUp';
import SignOut from './components/SignOut';

function App() {
  return (
  <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/home' element={<Home />}/>
      <Route path='/signin' element={<SignIn />}/>
      <Route path='/signup' element={<SignUp />}/>
      <Route path='/signout' element={<SignOut />}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
