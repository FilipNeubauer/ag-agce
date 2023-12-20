import styles from "./Vymenik.module.css"

export const Vymenik = () => {
    return (
        <div>
            <h1 className={styles.title}>Výměník, 211</h1>
            <hr className={styles.hr}/>
            <p className={styles.mainDescription}>
            Basically bazar, když něco přinesu, tak si můžu za oplátku něco vzít nového, jinak malý poplatek (10–20 Kč). Vybírat se bude oblečení (málo nošené, vyprané), dekorace, knihy, doplňky ad. V rámci i kavárnička s nabídkou mezi kafem a čajem. <b>Doneste si své hrníčky!</b>
            </p>
        </div>
    )
}