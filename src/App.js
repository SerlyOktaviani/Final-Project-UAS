import { Route, Routes } from "react-router-dom";
import GlobalPage from "./pages/Global"
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Indonesia from "./pages/Indonesia";
import Provinsi from "./pages/Provinsi";

function App() {
  return (
    <div>
      <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/global" element={<GlobalPage />}/>
          <Route path="/indonesia" element={<Indonesia />} />
          <Route path="/provinsi" element={<Provinsi />} />
          <Route path="/about" element={<Provinsi />} />
        </Routes>
      </Layout>
      </>
    </div>
  );
}

export default App;
