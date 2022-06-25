import styles from "./index.module.css";

function GlobalCard(props){
    
    return(
        <div className={`${styles.grid_item} ${styles.card}`}>
            <div className={styles.container_card}>
                <p>{props.status}</p> 
                <h2 className={ props.status === "Positif" ? styles.color__green : props.status === "Sembuh" ? styles.color__blue : styles.color__red }>
                    <b>{props.jumlah}</b>
                </h2> 
            </div>
        </div>
    )
}


export default GlobalCard;
