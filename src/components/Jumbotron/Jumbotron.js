import Link from 'next/link'
import styles from './jumbotron.module.css'

export const Jumbotron = ()=>{
    return(
        <section className={styles.jumbotron}>
            <div className={styles.jumbotronTitles}>
                <span className={styles.jumbotronTitle}>
                    Enid Alvarez, bolsos a crochet
                </span>
                <div className={styles.jumbotronButtons}>
                    <Link href='/bolsos'>
                        Ver bolsos
                    </Link>
                </div>
            </div>
        </section>
    )
}