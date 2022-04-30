import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Order from './components/Inventory/Order/Order';
import Products from './components/Inventory/Products/Products';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Pages/Login/Login';
import Signup from './components/Pages/Signup/Signup';

function App() {
  return (
    <div className='page-container'>
      <div className='contend-wrap'>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/products' element={<Products></Products>}></Route>
          <Route path='/order' element={<Order></Order>}></Route>
          {/* <Route path='/inventory' element={}></Route> */}
          <Route path='/blogs' element={<Blogs></Blogs>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<Signup></Signup>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
