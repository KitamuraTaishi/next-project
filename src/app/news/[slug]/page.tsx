import { notFound } from 'next/navigation';
import { getNewsDetali } from '@/types/microcms';
import Article from '@/components/Article';
import ButtonLink from '@/components/ButtonLink';
import styles from './page.module.css';

type Props = {
  params: Promise<{
    slug: string;
  }>;
  searchParams: {
    dk?: string
  }
};

export default async function Page({ params, searchParams}: Props) {
  const { slug } = await params
  const data = await getNewsDetali(slug, {
    draftKey: searchParams.dk
  }).catch(notFound);

  return (
    <>
      <Article data={data} />
      <div className={styles.footer}>
        <ButtonLink href="/news">ニュース一覧へ</ButtonLink>
      </div>
    </>
  );
}