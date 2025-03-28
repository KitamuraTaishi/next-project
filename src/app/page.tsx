import Image from "next/image";
import styles from "./page.module.css";
import ButtonLink from "@/components/ButtonLink";
import NewsList from "@/components/NewsList";
// import { News } from "@/types";
import { getNewsList } from "@/types/microcms";
import { TOP_NEWS_LIMIT } from "@/constants";

export default async function Home() {
 const data = await getNewsList({
    limit: TOP_NEWS_LIMIT
 })
  // const sliceData: News = []
  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>テクノロジーの力で世界を変える</h1>
          <p className={styles.description}>
            私たちは市場をリードしているグローバルテックカンパニーです。
          </p>
        </div>
        <Image
          className={styles.bgimg}
          src="/img-mv.jpg"
          alt=""
          width={4000}
          height={1200}
        />
      </section>
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList news={data.contents}/>
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
    </>

  )
}
