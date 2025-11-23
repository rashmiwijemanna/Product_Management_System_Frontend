import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './pages/product'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <div className="raw">
        <Product/>
      </div>
    </div>
    
     
    </>
  )
}

export default App
