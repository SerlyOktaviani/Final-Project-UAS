import { useState } from "react";
import Footer from "../components/Footer";
import Form from "../components/FormCovid";
import Global from "../components/Global";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Table from "../components/Table";
import data from "../utils/constants/provinces";


function Main() {

  const [provinces, setProvinces] = useState(data.provinces);

  return (
    <main>
      <Hero />
      <Global />
      <Table provinces={provinces} setProvinces={setProvinces}/>
      <Form provinces={provinces} setProvinces={setProvinces} />      
    </main>
  );
}

function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

export default Home;
