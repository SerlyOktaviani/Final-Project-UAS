import Hero from "../components/Hero";
import Table from "../components/Table";
import Form from "../components/FormCovid";
import { useState } from "react";
import data from "../utils/constants/provinces";


function Provinsi() {

    const [provinces, setProvinces] = useState(data.provinces);    

    return (
    <>   
      <Hero />
      <Table provinces={provinces} setProvinces={setProvinces}/>
      <Form provinces={provinces} setProvinces={setProvinces} />         
    </>
    )
    
}

export default Provinsi;