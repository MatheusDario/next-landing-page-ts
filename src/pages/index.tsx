import { App, AppProps } from '../templates/App';
import { loadPages } from '../api/load-pages';
import { GetStaticProps } from 'next';

export default function Index({ data = null }: AppProps) {
  return <App data={data} />;
}

export const getStaticProps: GetStaticProps<AppProps> = async () => {
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
