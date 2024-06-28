import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {MyNavbar} from './Components/NavBarComponent/MyNavbar.jsx';
import Products from './Components/ProductsComponent/Products.jsx';

function App() {
  return (
    <div className="App">
      <MyNavbar></MyNavbar>
     <h1>My Products</h1>
     <Products>
      <button  className='btn btn-success'>Click</button>
     </Products>
     
    </div>
  );
}

export default App;
