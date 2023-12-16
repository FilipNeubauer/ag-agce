import { HomeBanner } from "../../components/HomeBanner/HomeBanner"
import styles from "./HomePage.module.css"

export const HomePage = () => {

                // <HomeBanner title="Jarmark" subtitle="211, 212" />
                // <HomeBanner title="Deskovky" subtitle="007" />
                // <HomeBanner title="Creative class" subtitle="203" />
                // <HomeBanner title="Kam si dát věci?" /> 

    
    return (
        <>
            <div>
                <h1 className={styles.title}>Harmonogram dne:</h1>
                <div className={styles.harmonogram}>
                    <p><b>1. a 2. hodina:</b> výuka dle standratního rozvrhu</p>
                    <p><b>3. - 5. hodina:</b> akce</p>
                    <p><b>6. hodina:</b> třídnické s TU v kmenových třídách, kontrola docházky</p>
                    <p><b>7. - 9. hodina:</b> odpadá</p>
                </div>

            </div>

            <div className={styles.bannersContainer}>
                <HomeBanner title="Absolventi" subtitle="111 - 114" href="/absolventi"/>   
                <HomeBanner title="Tančírna" subtitle="VT" href="/tancirna" />    
                <HomeBanner title="Filmy" subtitle="301, 303" href="/filmy" />
                <HomeBanner title="Výměník" subtitle="211" href="/vymenik"/>
                <HomeBanner title="Hudebka" subtitle="212" href="/hudebka"/>
                <HomeBanner title="Na koho se obrátit?" href="/support"/>

            </div>
        </>
    )
}