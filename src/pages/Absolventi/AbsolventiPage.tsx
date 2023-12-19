import { Paper } from "@mui/material"
import styles from "./AbsolventiPage.module.css"

export const AbsolventiPage = () => {

    const classes: ClassRoomProps[] = [
        {
            classNumber: 111
        },
        {
            classNumber: 112
        },
        {
            classNumber: 113
        },
        {
            classNumber: 114
        }
    ]



    return (
        <div>
            <h1 className={styles.title}>Absolventi 111 - 114</h1>
            <hr className={styles.hr} />

            <p className={styles.mainDescription}>
            V učebnách 111 až 114 budou absolventi AG představovat své vysoké školy. Dají vám tipy, jak zvládnout studium na AG, jak si vybrat VŠ apod. Absolventi nic neprezentují před celým publikem, můžete za nimi zajít a zeptat se jich na cokoli vás zajímá, rádi si s vámi popovídají!
            </p>

            <div className={styles.classesContainer}>
                {
                    classes.map((element, i) => {
                        return (
                            <ClassRoom key={i} classNumber={element.classNumber} />
                        )
                    })
                }
            </div>

        </div>
    )
}


type ClassRoomProps = {
    classNumber: number
}

const ClassRoom = ({ classNumber }: ClassRoomProps) => {
    return (
        <div className={styles.classContainer}>
            <Paper elevation={5}>
                <h2 className={styles.classTitle}>{classNumber}</h2>
            </Paper>
            <p>
            Připravujeme seznam absolventů do učebny {classNumber}.
            </p>
        </div>
    )
}