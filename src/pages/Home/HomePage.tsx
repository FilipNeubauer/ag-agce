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
                    <p><b>1. a 2. hodina:</b> výuka dle standardního rozvrhu</p>
                    <p><b>3.&ndash;5. hodina:</b> akce</p>
                    <p><b>6. hodina:</b> třídnické s TU v kmenových třídách, kontrola docházky</p>
                    <p><b>7.&ndash;9. hodina:</b> odpadá</p>
                </div>

            </div>

            <div className={styles.bannersContainer}>
                <HomeBanner title="Absolventi" subtitle="111&ndash;114" href="/absolventi" emoji="🙎‍♂️"/>   
                <HomeBanner title="Tančírna" subtitle="tělocvičny" href="/tancirna" emoji="💃" />    
                <HomeBanner title="Filmy" subtitle="301, 303" href="/filmy" emoji="🖥️" />
                <HomeBanner title="Výměník" subtitle="211" href="/vymenik" emoji="🧸"/>
                <HomeBanner title="Hudebka" subtitle="212" href="/hudebka" emoji="🎤"/>
                <HomeBanner title="Akademické literární doupě" subtitle="201" href="/literatura" emoji="📚" />
                <HomeBanner title="Umělecké křídlo" subtitle="203" href="/art" emoji="🎨" />
                <HomeBanner title="Deskovky" subtitle="007" href="/deskovky" emoji="🎲" />
                <HomeBanner title="Kahoot kvíz o škole" subtitle="411" href="/kahoot" emoji="🤯" />
                <HomeBanner title="Přednášky + promítání" subtitle="214 a 304" href="/prednasky" emoji="🎥" />

                <HomeBanner title="Na koho se obrátit?" href="/support"/>

            </div>
        </>
    )
}
