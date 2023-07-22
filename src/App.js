import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom'
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';


function App() {
  return (
    <div className="App" >
      <Header/>
        <Routes>
          <Route path ='/' exact element={<ProductList/>}/>
          <Route path ='/book/:bookId' exact element={<ProductDetails/>}/>
          <Route>404, Not Found!</Route>
        </Routes>
      
    </div>
  );
}

export default App;
