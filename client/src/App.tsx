import Navbar from './components/templates/navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/home/Home';
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
