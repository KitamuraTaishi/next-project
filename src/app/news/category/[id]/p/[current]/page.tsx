import { getNewsList, getCategroyDetail } from "@/types/microcms";
import NewsList from "@/components/NewsList";
import { notFound } from "next/navigation";
import { NEWS_LIST_LIMIT } from "@/constants";
import Pagination from "@/components/Pagination";



type Props = {
    params: {
      id: string
      current: string
    }
}
export default async function Page({ params }: Props) {
    const current = parseInt(params.current as string, 10);
  
    if (Number.isNaN(current) || current < 1) {
      notFound();
    }
    const category = await getCategroyDetail(params.id).catch(notFound)
    const { contents: news, totalCount } = await getNewsList({
      filters: `category[equals]${category}`,
      limit: NEWS_LIST_LIMIT,
      offset: NEWS_LIST_LIMIT * (current - 1),
    });
  
    if (news.length === 0) {
      notFound();
    }
  
    return (
      <>
        <NewsList news={news} />
        <Pagination 
        totalCount={totalCount}
        current={current}
        basePath={`/news/category/${category.id}`}
         />
      </>
    );
  }