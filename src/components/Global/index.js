import GlobalCard from "../GlobalCard";
import styles from "./index.module.css";
import data from "../../utils/constants/indonesia"

function  Global(props) {

  const listGlobalStatus = data.indonesia
  const {jenis,dataStatus} = props;
  console.log("serly");
  console.log(jenis)
  console.log(dataStatus);


  return (
    <div className={styles.container}>
    <section>
        <div className={styles.title_container}>
            <h1>{ jenis === "global" ? "Global" : "Indonesia"}</h1>
            <p>Data Covid Berdasarkan Global</p>
        </div>
        <div className={styles.grid_container}>
        <GlobalCard status={"confirmed"} jumlah={dataStatus.confirmed.value} />
        <GlobalCard status={"recovered"} jumlah={dataStatus.recovered.value} />
        <GlobalCard status={"deaths"} jumlah={dataStatus.deaths.value} />
                
        </div>
    </section>
</div>
  

  );
}

export default Global;
