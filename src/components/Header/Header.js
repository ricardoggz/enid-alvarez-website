'use client'
import { useState } from 'react';
import Link from 'next/link'
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import styles from './header.module.css'

export const Header = ()=>{
    const [isOpen, setIsOpen] = useState(false)
    const openMenu=()=>setIsOpen(!isOpen)
    return(
        <header className={styles.headerWrapper}>
            <nav className={`flexContainer ${styles.navElements}`}>
                <figure className={styles.navImage}>
                    <Link href='/'>
                    <img src='http://enidalvarez.store/wp-content/uploads/2022/08/logo-mediano-grande.jpg' />
                    </Link>
                </figure>
                <button
                    className={styles.buttonMenu}
                    onClick={openMenu}
                >
                    {
                        !isOpen?
                        <FaBars/>
                        :
                        <IoMdClose />
                    }
                </button>
                <ul className={`${styles.navList} ${!isOpen ? '' : styles.active}`}>
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
                    <li>
                        <Link href='/hilos'>
                            Hilos
                        </Link>
                    </li>
                    <li>
                        <Link href='/kits'>
                            Kits
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}