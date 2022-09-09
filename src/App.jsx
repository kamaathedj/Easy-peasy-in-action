/* eslint-disable react/react-in-jsx-scope */
import {
  Route, NavLink, HashRouter, Routes,
} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';

function App() {
  return (
    <HashRouter>
      <div>
        <h1>React router demo</h1>
        <div>
          <NavLink
            style={({ isActive }) => ({
              display: 'block',
              margin: '1rem 0',
              color: isActive ? 'red' : '',
            })}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              display: 'block',
              margin: '1rem 0',
              color: isActive ? 'red' : '',
            })}
            to="/product"
          >
            {' '}
            Product
            {' '}
          </NavLink>
          <NavLink
            style={({ isActive }) => ({
              display: 'block',
              margin: '1rem 0',
              color: isActive ? 'red' : '',
            })}
            to="/about"
          >
            {' '}
            About
          </NavLink>
        </div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/product" element={<Product />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
