import { Routes, Route } from "react-router-dom";
import Layout from './components/layout/Layout';
import Login from './components/auth/Login';
import Register from "./components/auth/Register";
const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Layout />}></Route>
    </Routes>
  );
}

export default App;
