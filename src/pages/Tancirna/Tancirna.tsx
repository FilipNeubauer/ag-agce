import styles from "./Tancirna.module.css"

export const Tancirna = () => {

    return (
        <div>
            <h1 className={styles.title}>TANČÍRNA, TĚLOCVIČNY</h1>
            <hr className={styles.hr} />
            <p className={styles.mainDescription}>
            Pokud dorazíte do velké tělocvičny, budete si moct společně se svými přáteli pořádně zatancovat mnoho různých tanců. Pokud máte pocit, že vám tancování nejde, vůbec se nebojte, cílem je se pouze dobře bavit a v tancích se zdokonalit!
            <br/><br/>
            Tancování různých tanců, pouštění písniček a ke konci vánoční FREESTYLE!
            </p>
        </div>
    )
}