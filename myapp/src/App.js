// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Todo from './Pages/Todo';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Todo />} />
      </Routes>
    </div>
  );
}

export default App;
