import './App.css';
import './index.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import Homepage from './Components/page/home/home';
import BaseScreen from './Components/page/basescreen/baseSreen';
import Deposit from './Components/page/depositeannonce/deposit';
import LoginPage from './Components/page/loginpage/loginPage';




function App() {

  return (
    <>


<BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseScreen />}>
          <Route index element={<Homepage/>} />
          <Route path="/deposit" element={<Deposit/>} />
          <Route path='/login' element={<LoginPage/>}/>
          
          <Route path="*" element={<h1>404 not found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>

    {/* <Nav2/>
    <Carrousel/>
    <Homepage/>
    <Footer/> */}

    </>
    
  );
}

export default App;
