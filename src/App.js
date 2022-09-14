import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, route, Route} from 'react-router-dom' 
function App() {

  return (
  <>
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='detail/:id' element={<ItemDetailContainer/>} />
        </Routes>
      </BrowserRouter>
      {/* <ItemDetailContainer/> */}
    </div>
    </>
  );
}

export default App;
