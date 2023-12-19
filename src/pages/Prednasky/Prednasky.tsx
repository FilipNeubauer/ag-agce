import styles from "./Prednasky.module.css";

export const Prednasky = () => {

    return (
        <div>
            <h1 className={styles.title}>Přednášky + promítání, 214 a 304</h1>
            <hr className={styles.hr}/>
            <p className={styles.mainDescription}>
                Připravujeme podrobnosti. Součástí také bude promítání nejlepší tvorby studentů za rok 2023 ze semináře AVT.
            </p>
        </div>
    )
}