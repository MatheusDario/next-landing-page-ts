import { loadPages } from '../api/load-pages';
import { App } from '../templates/App';
import P from 'prop-types';

export default function Page({ data }) {
  return <App data={data} />;
}

Page.propTypes = {
  data: P.object,
};

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { slug: 'info-produto' } }],
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  let data = null;

  try {
    data = await loadPages(params.slug);
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
