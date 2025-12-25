// App.jsx - CORRECT
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route racine avec Layout */}
        <Route path="/" element={<Layout />}>
        
          <Route index element={<Home />} />
          
          {/* <Route path="about" element={<About />} /> */}
          
          {/* Autres routes... */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;