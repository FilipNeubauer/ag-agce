import { Paper } from "@mui/material";
import styles from "./Prednasky.module.css";

export const Prednasky = () => {

    return (
        <div>
            <h1 className={styles.title}>Přednášky + promítání, 214 a 304</h1>
            <hr className={styles.hr}/>
            <p className={styles.mainDescription}>
                Připravujeme podrobnosti. Součástí také bude promítání nejlepší tvorby studentů za rok 2023 ze semináře AVT.
            </p>


            <div className={styles.classesContainer}>

                <div className={styles.classContainer}>
                    <Paper elevation={5}>
                        <h2 className={styles.classTitle}>Harmonogram učebny 214</h2>
                    </Paper>
                    <p>
                    <b>9:50&ndash;10:00</b> Fíla Neubauer ze 4. A o Otevřené vědě (<a href="https://www.otevrenaveda.cz/cs/index.html" target="_blank">web</a>)
                    <br/>
                    <br/>


                    <b>10:00&ndash;10:20</b> přednáška EYP + regionální konference (Kle) 
                    <br/>
                    <br/>

                    <b>10:20&ndash;10:40</b> BICHLE, Bio exkurze, promítání fotek (Bd, popř. když stihne Mik)

                    <br/>
                    <br/>
                    <b>10:45</b> koncert na schodech (Křo)

                    <br/>
                    <br/>

                    <b>11:00&ndash;12:30</b> Promítání AVT filmů BEST OF THE BEST 2023
                    </p>
                
                </div>

                <div className={styles.classContainer}>
                    <Paper elevation={5}>
                        <h2 className={styles.classTitle}>Harmonogram učebny 304</h2>
                    </Paper>
                    <p>
                    <b>9:45&ndash;9:55</b> akce ŠJ (Čič, Nov) – konverzační pikniky a (gastro)exkurze
                    <br/>
                    <br/>


                    <b>9:55&ndash;10:20</b> akce Aj (Kon) – vzpomínky na zájezd 2023, zájezdy, budoucnost vyučování předmětů/seminářů v Aj (Hor)
                    <br/>
                    <br/>


                    <b>10:20&ndash;10:40</b> akce La (Ma, Mo)
                    <br/>
                    <br/>



                    <b>10:45</b> koncert na schodech (Křo)
                    <br/>
                    <br/>

                    <b>11:00&ndash;11:30</b> akce Fj (Mi, ((Meu)) ) – Prix Sony Labou Taxi, aneb přiblížení francouzské literatury studentům francouzštiny
                    <br/>
                    <br/>


                    <b>11:30&ndash;12:00</b> akce Nj + promítání fotek z Berlína (Mi)

                    </p>
                
                </div>

        </div>
        </div>
    )
}