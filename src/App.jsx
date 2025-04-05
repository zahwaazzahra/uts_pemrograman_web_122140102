import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Rent from './pages/rent';
import Payment from './pages/Payment';
import Confirmation from './pages/Confirmation';
import Navbar from './components/Navbar';
import { SepedaProvider } from './context/SepedaContext';
import './App.css';

function App() {
  return (
    <SepedaProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </SepedaProvider>
  );
}

export default App;
