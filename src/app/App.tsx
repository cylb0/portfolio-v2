import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import LegalNotice from '../pages/LegalNotice';
import Layout from './Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/legal-notice" element={<LegalNotice />} />
      </Route>
    </Routes>
  );
}

export default App;
