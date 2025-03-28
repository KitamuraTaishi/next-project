"use client";
import Image from "next/image";
import styles from "./index.module.css"
import { useRouter, useSearchParams } from "next/navigation";


export default function SearchField() {
    const router = useRouter()
    const searchParams = useSearchParams()

    const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const q = e.currentTarget.elements.namedItem("q")
        if (q instanceof HTMLInputElement) {
            const params = new URLSearchParams()
            params.set("q", q.value.trim())
            console.log(params.toString())
            router.push(`/news/search?${params.toString()}`)
        }
    }
    return (
        <form className={styles.from} onSubmit={handlerSubmit}>
            <label className={styles.search}>
                <Image src="/search.svg" alt="" width={16} height={16} loading="eager"/>
                <input 
                    type="text"
                    name="q"
                    defaultValue={searchParams.get("q") ?? undefined}
                    placeholder="キーワードを入力"
                    className={styles.searchInput}
                />
            </label>
        </form>
    )
}