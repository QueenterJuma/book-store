import './App.css';
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from 'react-router-dom';
import Layout from './components/Layout';
import Categories from './components/Categories';
import BookHolder from './components/BookHolder';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<BookHolder />} />
      <Route path="categories" element={<Categories />} />
    </Route>,
  ),
);

function App() {
  return (
    <div className="App">
      <div className="main">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
