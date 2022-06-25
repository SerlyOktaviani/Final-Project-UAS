import axios from "axios";
import { useEffect, useState } from "react";
import Global from "../components/Global";
import Hero from "../components/Hero";
import SummaryCovid from "../components/SummaryCovid";

function Indonesia() {
    const status = {
        confirmed:{
          status:"confirmed",
          value:0
        },
        recovered:{
          status:"recovered",
          value:0
        },
        deaths:{
          status:"deaths",
          value:0
        }
      }
      const [statusCovid, setStatusCovid] = useState(status);
      useEffect(async() => {
        getGlobal();
    
      }, []);
    
      console.log("testcovid");
      console.log(statusCovid);
    
    
    
      async function getGlobal(){
        // Fetch data menggunakan axios
        const response = await axios("https://covid19.mathdro.id/api/countries/indonesia");
        console.log(response.data);
        const newStatus = {
          confirmed:{
            status:"confirmed",
            value:response.data.confirmed.value
          },
          recovered:{
            status:"recovered",
            value:response.data.recovered.value
          },
          deaths:{
            status:"deaths",
            value:response.data.deaths.value
          }
        }
        setStatusCovid(newStatus);
        console.log(statusCovid);
    
      }
    return (
    <>          
        <Hero />
        <Global jenis={"indonesia"} dataStatus={statusCovid} />
        <SummaryCovid jenis={"indonesia"} />
    </>
    )
    
}

export default Indonesia;