import logo from './logo.svg';
import './App.css';
import Register from './Components/Register';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>

    </div>
  );
}

export default App;
