import styles from "./index.module.css"
import Link from "next/link"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <nav className={styles.nav}>
                <ul className={styles.items}>
                    <li className={styles.item}>
                        <Link href="/news">NEWS</Link>
                    </li>
                    <li className={styles.item}>
                        <Link href="/members">MEMBERS</Link>
                    </li>
                    <li className={styles.item}>
                        <Link href="/contact">CONTACT</Link>
                    </li>
                </ul>
            </nav>
            <p className={styles.cr}>© SIMPLE. ALL Rights Reserved 2024</p>
        </footer>
    )
}