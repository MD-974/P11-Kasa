import { BrowserRouter, Routes, Route } from "react-router-dom";


import Footer from './components/footer/Footer'
import Header from './components/header/Header'

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Error from "./pages/error/Error";
import './app.scss'


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="*" Component={Error} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
