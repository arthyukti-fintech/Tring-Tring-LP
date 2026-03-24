import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./components/About"
import Restaurants from "./pages/Restaurants"
import ContactUs from "./pages/ContactUs"
import ScrollToTop from "./components/utilis/ScrollToTop"
import {Toaster} from "react-hot-toast"

function App() {
  return (
    <div className="bg-primary min-h-screen">
      <ScrollToTop/>
       <Toaster position="top-right" reverseOrder={false} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About/>}/>
        <Route path="/restaurant" element={<Restaurants/>}/>
        <Route path="/contact-us" element={<ContactUs/>}/>
      </Routes>
      <Footer id="contact" />

    </div>
  )
}

export default App