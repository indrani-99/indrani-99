import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar';
import Allroutes from './components/Allroutes';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     
    
    <Allroutes/>
     
    </>
  )
}

export default App;
