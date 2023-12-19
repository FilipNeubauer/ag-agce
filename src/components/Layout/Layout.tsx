import { Link, useLocation, useNavigate } from "react-router-dom"
import Logo from "../../assets/ag-logo.png";
import styles from "./Layout.module.css";
import { IconButton } from "@mui/material";
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';

type Props = {
    children: React.ReactNode,
}


export const Layout = ({ children }: Props) => {

    const navigate = useNavigate()
    const location = useLocation()


    return (
        <>
            <nav className={styles.nav}>

            {
                location.pathname !== "/" &&  
                <IconButton sx={{ position: "absolute"}} size="small" className={styles.back} onClick={() => navigate(-1)}>
                    <ArrowBackIosRoundedIcon />
                    Zpět
                </IconButton>
            }

            <Link to="/">
                <img src={Logo} height={150}/>
            </Link>

            </nav>

            {children}

            <footer className={styles.footer}>
                <p>
                    Vytvořil Fíla Neubauer ❤️
                </p>
            </footer>
        </>
    )
}