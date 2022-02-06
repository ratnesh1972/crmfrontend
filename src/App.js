import { Routes, Route, Outlet, Link } from "react-router-dom";
import Layout from './components/layout/Layout';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
    </Routes>
  );
}

export default App;
