import React  from 'react'
import { BrowserRouter,Routes ,Route} from 'react-router-dom'
import Home from './pages/Home.js';
import Updates from './pages/Updates.js';
import Jobs from './pages/Jobs.js';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Analytics from './components/Analytics';
import Newsletter from './components/Newsletter';
import Cards from './components/Cards';
import Footer from './components/Footer';

 function App() {
  return (
<BrowserRouter  >
<Routes> 

<Route path='/' element={Home}></Route>
<Route path='/Updates' element={<Updates/>}></Route>
<Route path='/Jobs' element={<Jobs/>}></Route>

</Routes>
<div> 
  <Navbar/>
  <Hero/>
  <Analytics/>
  <Newsletter/>
  <Cards/>
  <Footer/>
  
</div>
</BrowserRouter>
  )
}
export default App