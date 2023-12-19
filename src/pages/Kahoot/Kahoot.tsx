import styles from "./Kahoot.module.css";

export const Kahoot = () => {

    return (
        <div>
            <h1 className={styles.title}>Kahoot kvíz o škole, 411</h1>
            <hr className={styles.hr}/>
            <p className={styles.mainDescription}>
            Mezi 10:00–10:30. Kdo nejlépe zná hlášky profesorů? A kdo ví i to nejmenší z naší školy? Pro výherce je připravena odměna. Doražte! Organizují Abigail Buschová, Karin Protazčová a Bára Soltanová, 4. C.
            </p>
        </div>
    )
}