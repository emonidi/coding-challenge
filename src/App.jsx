import { Routes, Route } from "react-router-dom"
import Home from './pages/home'
import Products from "./pages/products"
import Navigation from './components/navigation'
function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="products" element={<Products/>}/>
      </Routes>
    </div>
  )
}

export default App
