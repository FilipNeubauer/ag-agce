import styles from "./Art.module.css"

export const Art = () => {

    return (
        <div>
            <h1 className={styles.title}>Umělecké křídlo, 203</h1>
            <hr className={styles.hr} />
            <p className={styles.mainDescription}>
            Prostor pro výrobu přáníček, vzkazů pro studenty i učitele a nedílnou součástí budou také básnické výtvory studentů z AG.
            </p>
        </div>
    )
}