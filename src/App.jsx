
import { BrowserRouter , Route , Routes} from 'react-router-dom';
import MainPage from './pages/MainPage';
import BasketPage from './pages/BasketPage';
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return ( 
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage/>} />
      <Route path="/sepet" element={<BasketPage/>} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;
