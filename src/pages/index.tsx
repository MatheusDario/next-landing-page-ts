import { App } from '../templates/App';
import { loadPages } from '../api/load-pages';
import { GetStaticProps } from 'next';

export type IndexProps = {
  data: [];
};

export default function Index({ data = null }: IndexProps) {
  return <App data={data} />;
}

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
  let data = null;

  try {
    data = await loadPages('landing-page');
  } catch (e) {
    console.log(e);
  }

  if (!data || data.length === 0) {
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
