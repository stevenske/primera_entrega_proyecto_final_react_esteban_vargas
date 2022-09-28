import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CartProvider from './context/CartProvider';
import Cart from './components/cart/Cart';
function App() {

  return (
    <CartProvider>
      <div className="App">
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>} />
            <Route path='detail/:id' element={<ItemDetailContainer/>} />
            <Route path='category/:categoryName' element={<ItemListContainer/>} />
            <Route path='/cart' element={<Cart/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </CartProvider>
  );
}

export default App;
