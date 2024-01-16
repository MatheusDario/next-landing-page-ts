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
  // const url = config.url;
  // const raw = await fetch(url);
  // const json = await raw.json();
  // const data = json.data;

  // const mySlug = data.map((page) => {
  //   const {
  //     attributes: { slug },
  //   } = page;

  //   return { slug };
  // });

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
