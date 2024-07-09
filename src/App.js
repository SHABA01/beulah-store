import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Services } from './Pages/Services';
import { ContactUs } from './Pages/ContactUs';
import { Shop } from './Pages/Shop';
import { ProductList } from './Pages/ProductList';
import { Product } from './Pages/Product';
import { Cart } from './Pages/Cart';
import { Footer } from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/products' element={<ProductList/>}/>
          <Route path='/products' element={<Services/>}/>
          <Route path='/products' element={<ContactUs/>}/>
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
