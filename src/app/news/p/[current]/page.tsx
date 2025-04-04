import { getNewsList } from "@/types/microcms";
import NewsList from "@/components/NewsList";
import { notFound } from "next/navigation";
import { NEWS_LIST_LIMIT } from "@/constants";
import Pagination from "@/components/Pagination";


type Props = {
    params: Promise<{
        current: string
    }>
}
export default async function Page({ params }: Props) {
  const { current: currentString} = await params
    const current = parseInt(currentString as string, 10);
  
    if (Number.isNaN(current) || current < 1) {
      notFound();
    }
  
    const { contents: news, totalCount } = await getNewsList({
      limit: NEWS_LIST_LIMIT,
      offset: NEWS_LIST_LIMIT * (current - 1),
    });
  
    if (news.length === 0) {
      notFound();
    }
  
    return (
      <>
        <NewsList news={news} />
        <Pagination totalCount={totalCount} current={current} />
      </>
    );
  }