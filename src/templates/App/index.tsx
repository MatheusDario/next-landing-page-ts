import Head from 'next/head';
import { Base } from '../Base';
import {
  GridTwoColumns,
  GridTwoColumnsProps,
} from '../../components/GridTwoColumns';
import { GridContent, GridContentProps } from '../../components/GridContent';
import { GridSection, GridSectionProps } from '../../components/GridSection';
import { GridImage, GridImageProps } from '../../components/GridImage';
import { LogoLinkProps } from '../../components/LogoLink';
import { MenuLinkProps } from '../../components/MenuLink';

export type PageData = {
  title: string;
  slug: string;
  footerHtml: string;
  menu: LogoLinkProps & { links: MenuLinkProps[] };
  sections: SectionProps[];
};

export type SectionProps = (
  | GridImageProps
  | GridSectionProps
  | GridTwoColumnsProps
  | GridContentProps
) & { component: string };

export type AppProps = {
  data: PageData;
};

export const App = ({ data }: AppProps) => {
  const { menu, sections, footerHtml, slug, title } = data;
  const { links, text, link, srcimg } = menu;

  return (
    <Base
      links={links}
      footerHtml={footerHtml}
      logoData={{ text, link, srcimg }}
    >
      <Head>
        <title>{title}</title>
      </Head>
      {sections.map((section, index) => {
        const { component } = section;
        const key = `${slug}-${index}`;

        if (component === 'section.section-two-columns') {
          return (
            <GridTwoColumns key={key} {...(section as GridTwoColumnsProps)} />
          );
        }

        if (component === 'section.section-content') {
          return <GridContent key={key} {...(section as GridContentProps)} />;
        }

        if (component === 'section.section-grid-text') {
          return <GridSection key={key} {...(section as GridSectionProps)} />;
        }

        if (component === 'section.section-grid-image') {
          return <GridImage key={key} {...(section as GridImageProps)} />;
        }
      })}
    </Base>
  );
};
