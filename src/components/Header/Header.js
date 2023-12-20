'use client'
import Link from 'next/link'
import styles from './header.module.css'

export const Header = ()=>{
    return(
        <header className={styles.headerWrapper}>
            <nav className={`flexContainer ${styles.navElements}`}>
                <figure className={styles.navImage}>
                    <Link href='/'>
                    <img src='logo-mediano-grande.jpg' />
                    </Link>
                </figure>
                <ul className={styles.navList}>
                    <Link href='/'>
                        <li>Inicio</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}