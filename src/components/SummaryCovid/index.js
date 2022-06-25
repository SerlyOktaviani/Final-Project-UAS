import styles from "./index.module.css";
import data from "../../utils/constants/indonesia"

function  SummaryCovid(props) {

const {jenis} = props;

  const listGlobalStatus = data.indonesia

  return (
    <div className={styles.container}>
    <section>
        <div className={styles.title_container}>
            <h1>Summary</h1>
            <p>Data Covid Berdasarkan Global</p>
        </div>
        <div className={styles.grid_container}>
            <img src={jenis === "global" ? "https://covid19.mathdro.id/api/og" : "https://covid19.mathdro.id/api/countries/indonesia/og"} alt="" />
        </div>
    </section>
</div>
  

  );
}

export default SummaryCovid;
