import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Error from "./components/Error";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route
              path='/'
              element={<ItemListContainer greeting="Welcome to MarAbierto" title="El marketplace de NFT más grande de Latinoamérica" />}/>
            <Route path='/category/:id' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />}/>
            <Route path='*' element={<Error />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
