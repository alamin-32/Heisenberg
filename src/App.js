import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Order from './components/Inventory/Order/Order';
import ProductAdd from './components/Inventory/ProductManage/productAdd/ProductAdd';
import ProductDelete from './components/Inventory/ProductManage/ProductDelete/ProductDelete';
import UpdateProduct from './components/Inventory/ProductManage/UpdateProduct/UpdateProduct';
import Products from './components/Inventory/Products/Products';
import ManageItem from './components/ManageItem/ManageItem';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Pages/Login/Login';
import ResetPass from './components/Pages/ResetPass/ResetPass';
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
          {/* <Route path='/products/:_id' element={<Order></Order>}></Route> */}
          <Route path='/updateProduct/:id' element={<UpdateProduct></UpdateProduct>}></Route>
          <Route path='/manageItem' element={<ManageItem></ManageItem>}></Route>
          <Route path='/productAdd' element={<ProductAdd></ProductAdd>}></Route>
          <Route path='/productDelete' element={<ProductDelete></ProductDelete>}></Route>
          <Route path='/blogs' element={<Blogs></Blogs>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<Signup></Signup>}></Route>
          <Route path='/resetPass' element={<ResetPass></ResetPass>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
