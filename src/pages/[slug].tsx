import { GetStaticPaths, GetStaticProps } from 'next';
import { loadPages } from '../api/load-pages';
import { App, AppProps } from '../templates/App';

export default function Page({ data }: AppProps) {
  return <App data={data} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { slug: 'info-produto' } }],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<AppProps> = async ({ params }) => {
  let data = null;

  try {
    data = await loadPages(params.slug as string);
  } catch (e) {
    data = null;
  }

  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data,
    },
  };
};
