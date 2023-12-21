'use client'
import Link from 'next/link'
import styles from './header.module.css'

export const Header = ()=>{
    return(
        <header className={styles.headerWrapper}>
            <nav className={`flexContainer ${styles.navElements}`}>
                <figure className={styles.navImage}>
                    <Link href='/'>
                    <img src='http://enidalvarez.store/wp-content/uploads/2022/08/logo-mediano-grande.jpg' />
                    </Link>
                </figure>
                <ul className={styles.navList}>
                    <li>
                        <Link href='/'>
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link href='/bolsos'>
                            Bolsos
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}