import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Categories from './components/Categories';
import Books from './components/Books';

function App() {
  return (
    <div className="App">
      <div className="home">
        <Navigation />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="categories" element={<Categories />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
