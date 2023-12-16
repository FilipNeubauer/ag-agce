import styles from "./Hudebka.module.css"

export const Hudebka = () => {
    return (
        <div>
            <h1 className={styles.title}>HUDEBKA, 212</h1>
            <hr className={styles.hr}/>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
            <p className={styles.mainDescription}>
            Tato učebna je vyhrazena pro Sbor AG. 
            <br/><br/>

            </p>
                <a className={styles.link} target="_blank" href="https://docs.google.com/document/d/108N-nRWDfCa-kQy33i6E5Xes1ZFgDm29r1n52obkkRM/edit?usp=sharing">Zpívej s námi</a>
            </div>

        </div>
    )
}