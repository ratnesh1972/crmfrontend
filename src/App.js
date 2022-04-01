import { Routes, Route } from "react-router-dom";
import Layout from './components/layout/Layout';
import Login from './components/auth/Login';
import Register from "./components/auth/Register";
import Leads from './pages/Leads';
import Contacts from './pages/Contacts';
import Services from './pages/Services';

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Layout />}>
        <Route path="/leads" element={<Leads />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/services" element={<Services />} />
      </Route>
    </Routes>
  );
}

export default App;
