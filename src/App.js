import './App.css';
import Home from './screens/Home';
// import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { CartProvider } from './components/ContextReducer';
import About from './screens/About.js';
import ProductDetails from './screens/ProductDetails.js';


function App() {
  return (
  <>
  <CartProvider>
  <BrowserRouter>
    
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/about" element={<About/>} />
      <Route exact path="/product/:id" element={<ProductDetails/>} />
    </Routes>
  
</BrowserRouter>
  </CartProvider>
  </>
  );
}

export default App;
