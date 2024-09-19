
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './componants/Footer/Footer';
import Home from './componants/Home/Home';
import Navbar from './componants/Navbar/Navbar';
import Login from './componants/Login/Login';
import Contact from './componants/Contact/Contact';
import Signup from './componants/Signup/Signup';
import Price from './componants/Price/Price';
import Resource from './componants/Resourse/Resourse';
import Details from './componants/details/Details';
// import Category from './componants/Category/Category';
import Product from './componants/Product/Product';
import Level from './componants/Level/Level';
import Carts from './componants/Carts/Carts';
import About from './componants/About/About';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
       
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Price" element={<Price />} />
          <Route path="/Resource" element={<Resource />} />
          <Route path="/Details" element={<Details />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Level" element={<Level />} />
          <Route path="/Carts" element={<Carts />} />
          {/* <Route path="/" element={<Category />} /> */}
          <Route path="/About" element={<About />} />
          <Route path="/Footer" element={<Footer />} />
        </Routes>
      
      </div>
    </BrowserRouter>
  );
}

export default App;
