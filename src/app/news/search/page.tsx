import { getNewsList } from "@/types/microcms";
import { NEWS_LIST_LIMIT } from "@/constants";
import NewsList from "@/components/NewsList";
import SearchField from "@/components/SearchField";

type Props = {
  searchParams: {
    q?: string;
  };
};

export default async function Page({ searchParams }: Props) {
  const { contents: news } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    q: searchParams.q,
  });

  return (
    <>
      <SearchField />
      <NewsList news={news} />
    </>
  );
}