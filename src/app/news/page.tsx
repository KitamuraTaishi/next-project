import { getNewsList } from "@/types/microcms";
import NewsList from "@/components/NewsList";
import Pagination from "@/components/Pagination";
import SearchField from "@/components/SearchField";

export default async function Page() {
    const { contents: news, totalCount } = await getNewsList()
    return (
        <>
            <SearchField />
            <NewsList news={news} />
            <Pagination totalCount={totalCount}  />
        </>
    )
}