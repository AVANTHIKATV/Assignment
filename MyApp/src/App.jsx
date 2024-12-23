import { Route, Routes } from 'react-router-dom'
import './App.css';
import Navbar from './Components/Navbar'
import AddProduct from './Components/AddProduct'
import Dashboard from './Components/Dashboard'

function App() {
  

  return (
    <>
    <Navbar/>
<Routes>
  <Route path="/dash" element={<Dashboard/>}/>
  <Route path="/add" element={<AddProduct/>}/>
</Routes>
    </>
  );
}

export default App;

