import { getNewsList } from "@/types/microcms";
import { NEWS_LIST_LIMIT } from "@/constants";
import NewsList from "@/components/NewsList";
import SearchField from "@/components/SearchField";

type Props = {
  searchParams: Promise<{
    q?: string;
  }>;
};


export default async function Page({ searchParams }: Props) {
  const { q } = await searchParams
  const { contents: news } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    q: q,
  });

  return (
    <>
      <SearchField />
      <NewsList news={news} />
    </>
  );
}