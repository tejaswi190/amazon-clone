import './App.css';
import './Amazon-Logo-.jpg';
import Header from './Header.js';
import Home from './Home.js';
import Checkoutpage from './Checkoutpage.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login';
import { useEffect } from 'react';
import {auth} from "./firebase";
import {useStateValue} from './StateProvider';

function App() {
  const [{},dispatch] = useStateValue();
  useEffect(() => {
     auth.onAuthStateChanged(authUser => {
      console.log("The use is >>>",authUser);
      if(authUser){
         dispatch({
          type:'SET_USER',
          user:authUser
         })
      }
      else{
        dispatch({
          type:'SET_USER',
          user:null
         })
      }
     })
  },[])
  return (
    <BrowserRouter>
    <Routes>
    {/* <div className="App"> */}
       <Route path='loginpage' element={<Login></Login>}></Route>
       <Route path='/' element={<Header></Header>}>
            <Route index element={<Home></Home>}></Route>
            <Route path='checkoutpage' element={<Checkoutpage></Checkoutpage>}></Route>
       </Route>
       
      {/* Home */}
      
    {/* </div> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
