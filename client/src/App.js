import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Characters from './components/Characters';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import OneCharacter from './components/OneCharacter';
import UpdateForm from './components/UpdateForm';
import Register from './components/Register';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path= '/form' element={<Form />} />
          <Route path= '/characters' element={<Characters />} />
          <Route path= '/onecharacter/:id' element={<OneCharacter />} />
          <Route path= '/editcharacter/:id' element={<UpdateForm />} />
          <Route path= '/register' element={<Register />} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
