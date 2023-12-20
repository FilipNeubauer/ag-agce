import { Paper } from "@mui/material"
import styles from "./Filmy.module.css"

export const Filmy = () => {
    return (
        <div>
            <h1 className={styles.title}>FILMY 301, 303</h1>
            <hr className={styles.hr}/>
            <p className={styles.mainDescription}>
            Chcete nasát vánoční atmosféru? Podívat se s kamarády na hezké filmy a využít náladu posledních předvánočních dní naplno? Doražte do učeben 301 a 303, které se na dobu celé akce promění v malá kina, kde se budou promítat vánoční filmy a pohádky evropské kinematografie.

<br/><br/>
Deky a polštářky doporučovány!





        <div className={styles.classContainer}>
            <Paper elevation={5}>
                <h2 className={styles.classTitle}>303 &ndash; Aj, Fj</h2>
            </Paper>
            <p>
            <b>9:45&ndash;10:30:</b> poběží vánoční epizoda Mr. Beana, která je hodně známá, ale stále zajisté pobaví a naladí tu správnou atmosféru 
            <br/>
            <br/>
            <b>10:45&ndash;12:30:</b> Francouzský vánoční film na způsob velkofilmu z USA - Santa & Cie
            </p>
        </div>
        <div className={styles.classContainer}>
            <Paper elevation={5}>
                <h2 className={styles.classTitle}>301 &ndash; Šj, Nj</h2>
            </Paper>
            <p>
            <b>9:45&ndash;11:00:</b> Tři oříšky pro Popelku, film, který je v Německu velmi populární
            <br/>
            <br/>
            <b>11:10&ndash;12:25:</b> pustíme film Klaus, asi nejpopulárnější vánoční film ze Španělska.
            </p>
        </div>

            </p>
        </div>
    )
}