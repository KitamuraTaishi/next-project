import { getNewsList } from "@/types/microcms"
import { notFound } from "next/navigation"
import NewsList from "@/components/NewsList"
import { getCategroyDetail } from "@/types/microcms"
import Category from "@/components/Category"
import { NEWS_LIST_LIMIT } from "@/constants"
import Pagination from "@/components/Pagination"
type Props = {
    params: {
        id: string
    }
}

export default async function Page({ params }: Props) {
    const { id } = await params
    const category = await getCategroyDetail(id).catch(notFound)
    const { contents: news, totalCount} = await getNewsList({
        limit: NEWS_LIST_LIMIT,
        filters: `category[equals]${category.id}`
    })

    return (
        <>
            <p>
                <Category category={category} />
            </p>
            <NewsList news={news} />
            <Pagination 
            totalCount={totalCount}
            basePath={`/news/category/${category.id}`}
            />
        </>
    )
}