import { ButtonBase, Card, CardActionArea, CardMedia, Paper } from "@mui/material"
import styles from "./HomeBanner.module.css"
import { Link } from "react-router-dom"

type Props = {
    title: string,
    subtitle?: string,
    href: string
}

export const HomeBanner = ({ title, subtitle, href }: Props) => {


    return (
        <Card elevation={3} className={styles.banner} component={Link} to={href}>
            {/* <CardActionArea> */}
                <h2 className={styles.title}>{title}</h2>
                {subtitle && <h3 className={styles.subtitle}>{subtitle}</h3>}
            {/* </CardActionArea>             */}

        </Card>
    )
}