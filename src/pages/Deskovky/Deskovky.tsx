import styles from "./Deskovky.module.css";

export const Deskovky = () => {

    return (
        <div>
            <h1 className={styles.title}>Deskovky, 007</h1>
            <hr className={styles.hr}/>
            <p className={styles.mainDescription}>
            Prostor pro hraní deskových her. V atriu bude omezený počet deskovek, pokud máte možnost bylo by super donést si nějaké z domova.
            </p>
        </div>
    )
}