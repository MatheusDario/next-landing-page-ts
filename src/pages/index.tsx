import P from 'prop-types';
import { App } from '../templates/App';
import { loadPages } from '../api/load-pages';

export default function Index({ data = null }) {
  return <App data={data} />;
}

export const getStaticProps = async () => {
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

Index.propTypes = {
  data: P.object,
};
