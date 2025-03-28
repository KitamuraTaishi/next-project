import Image from "next/image"
import styles from "./index.module.css"
import Link from "next/link"
import Menu from "@/components/Menu"

export default function Header() {
    return (
        <header className={styles.header}>
            <Link href="/" className={styles.logLink}>
                <Image
                    src="./logo.svg"
                    alt="SIMPLE"
                    className={styles.logo}
                    height={133}
                    width={348}
                    priority
                />
            </Link>
           <Menu />
        </header>
    )
}