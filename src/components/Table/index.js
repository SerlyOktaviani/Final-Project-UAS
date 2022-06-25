import styles from "./index.module.css";

function Table(props) {
    const {provinces} = props;
    
    
    return(
        <div className={styles.container}>
            <div className={styles.center}>
            <h1 className={styles.color__green}>Provinsi</h1>
            <p className={styles.color__blue}>Data Covid Berdasarkan Provinsi</p>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Provinsi</th>
                        <th>Positif</th>
                        <th>Sembuh</th>
                        <th>Dirawat</th>
                        <th>Meninggal</th>
                    </tr>
                </thead>
                <tbody>
                    {provinces.map(function(province, index){
                            return (
                                <tr>
                                    <td>{++index}</td>
                                    <td>{province.kota}</td>
                                    <td>{province.kasus}</td>
                                    <td>{province.sembuh}</td>
                                    <td>{province.meninggal}</td>
                                    <td>{province.dirawat}</td>
                                </tr>
                            )
                        })}       
            </tbody>
        </table> 
</div>
    )
}

export default Table;