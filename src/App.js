
import './App.css';


import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import Login from './component/Login';
import Dashboard from './component/Dashboard';
import Reg from './component/Reg';
import PasswordForm from './component/PasswordForm';
import Todo from './component/Todo';
import User from './component/User';
import Post from './component/Post';
import Product from './component/Product';




function App() {
  return (
   <div>
     <Router>
      <Routes>
      <Route exact path="/registration" element={<Reg />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/dashboard" element={<Dashboard />} />
      <Route exact path="/password" element={<PasswordForm/>} />
      <Route exact path="/posts" element={<Post/>} />
      <Route exact path="/products" element={<Product/>} />
      <Route exact path="/userListing" element={<User/>} />
      <Route exact path="/todo" element={<Todo/>} />
      

      </Routes>
      </Router>
      
       {/* <Product></Product> */}

    </div>
  );
}

export default App;

