import { Footer } from '.';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    footerHtml: `<p>
    Desenvolvido por
    <a
      rel="nofollow"
      target="_blank"
      href="https://www.linkedin.com/in/matheus-dario"
      >Matheus Dario</a
    >
  </p>`,
  },
};
export const Template = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};
