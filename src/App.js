import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom' 
function App() {

  return (
  <>
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='detail/:id' element={<ItemDetailContainer/>} />
          <Route path='category/:categoryName' element={<ItemListContainer/>} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
