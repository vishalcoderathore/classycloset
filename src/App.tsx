import Home from './components/pages/home/Home';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/templates/navbar/Navbar';
import Shop from './components/pages/shop/Shop';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
