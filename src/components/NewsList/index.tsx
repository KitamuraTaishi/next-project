import Image from "next/image";
import styles from "./index.module.css"
import Category from "../Category";
import Date from "../Date";
import { News } from "@/types"
import Link from "next/link"

type Props = {
    news: News[]
}

export default function NewsList({ news }: Props) {
    if (news.length === 0) {
        return <p>No Article</p>
    }
    return (
        <ul>
          {news.map((article) => (
            <li key={article.id} className={styles.list}>
             
              {/* TODO:別の章で、リンクと正式な画像に差し替えます */}
              <Link href={`/news/${article.id}`} className={styles.link}>
                {article.thumbnail ? (
                  <Image
                    src={article.thumbnail.url}
                    alt=""
                    className={styles.image}
                    width={article.thumbnail.width}
                    height={article.thumbnail.height}
                  />
                ) : (
                  <Image
                    src="/no-image.png"
                    alt="No image"
                    className={styles.image}
                    width={1200}
                    height={630}
                  />
                )}
                <dl className={styles.content}>
                  <dt className={styles.title}>{article.title}</dt>
                  <dd className={styles.meta}>
                    <Category category={article.category}/>
                    <Date date={article.publishedAt!}/>
                  </dd>
                </dl>
              </Link>
            </li>
          ))}
        </ul>
    )
}