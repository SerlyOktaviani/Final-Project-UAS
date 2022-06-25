import styles from "./index.module.css";
import svg from "./FormCovid.svg";
import { useState } from "react";


function FormCovid(props) {


    const [provinsi, setProvinsi] = useState("");
    const [status, setStatus] = useState("");
    const [jumlah, setJumlah] = useState("");

    const {provinces, setProvinces} = (props);
    
    function handleProvinsi(e){
        setProvinsi(e.target.value);
    }

    function handleStatus(e){
        setStatus(e.target.value)
    }
    
    function handleJumlah(e){
        setJumlah(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault(); 
        
        let cariIdProvinsi = provinces.findIndex(province => province.kota === provinsi);
            let cariProvinsi = provinces.find(province => province.kota === provinsi);

            console.log(cariProvinsi);
            console.log(cariIdProvinsi);

            const updateData = {
                kota: provinsi,
                kasus: parseInt(cariProvinsi.kasus, 10) + (status === "Positif" ? parseInt(jumlah, 10) : 0),
                sembuh: parseInt(cariProvinsi.sembuh, 10) + (status === "Sembuh" ? parseInt(jumlah, 10) : 0),
                meninggal: parseInt(cariProvinsi.meninggal, 10) + (status === "Meninggal" ? parseInt(jumlah, 10) : 0),
                dirawat: parseInt(cariProvinsi.dirawat, 10) + (status === "Dirawat" ? parseInt(jumlah, 10) : 0),
            }

            console.log("kambing");

            provinces[cariIdProvinsi] = updateData;
            
            setProvinces([...provinces]);

            setProvinsi("")
            setStatus("")
            setJumlah("")
        }
    

    return (
        <div className={styles.container}>
      <section className={styles.form}>
        <div className={styles.form__left}>
            <img
                className={styles.form__image}
                src={svg}
                alt="placeholder"
            />
        </div>
        <div className={styles.form__right}>
            <h2 className={styles.form.title}>Form Covid</h2>
            <form onSubmit={handleSubmit}>
                <div className={styles.form__group}>
                    <label htmlFor="Provinsi" className={styles.form__label}>
                        Provinsi
                    </label>
                    <select
                    onChange={handleProvinsi} 
                    name="province"
                    id="province" 
                    className={styles.form__input} 
                    type="text" 
                    value={provinsi}>
                        <option value="none">Pilih Item</option>
                    {
                        provinces.map((province) => {
                                return <option key={province.kota} value={province.kota}>{province.kota}</option>
                        })
                    }
                    </select>                                        
                </div>
                <div className={styles.form__group}>
                    <label htmlFor="Status" className={styles.form__label}>
                        Status
                    </label>
                    <select
                    onChange={handleStatus}
                    id="Status" 
                    className={styles.form__input} 
                    type="text" 
                    value={status}>
                         <option value="none">Pilih Item</option>
                        <option value="Positif">Positif</option>
                        <option value="Dirawat">Dirawat</option>
                        <option value="Sembuh">Sembuh</option>
                        <option value="Meninggal">Meninggal</option>
                    </select>
                </div>
                <div className={styles.form__group}>
                    <label htmlFor="jumlah" className={styles.form__label}>
                        Jumlah
                    </label>
                    <input 
                    onChange={handleJumlah}
                    id="jumlah" 
                    className={styles.form__input} 
                    type="number" 
                    value={jumlah}/>
                </div>
                <div>
                    <button className={styles.form__button}>Submit</button>
                </div>        
            </form>
        </div>
      </section>
    </div>
    )
}

export default FormCovid;