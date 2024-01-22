/* eslint-disable @typescript-eslint/no-explicit-any */
import { MenuLinkProps } from '../components/MenuLink';
import { PageData } from '../templates/App';

export const mapMenu = (menu = {} as any): PageData['menu'] => {
  const {
    logo_link: link = '',
    open_in_new_tab: newtab = false,
    logo_text: text = '',
    //logo: { data: { attributes: { url: srcimg = '' } = '' } = '' } = '',
    menu_links: links = [],
  } = menu;

  const srcimg =
    menu.logo_text && menu.logo.data.attributes.url
      ? menu.logo.data.attributes.url
      : '';

  return {
    newtab,
    link,
    text,
    srcimg,
    links: mapMenuLinks(links),
  };
};

export const mapMenuLinks = (links = []): MenuLinkProps[] => {
  return links.map((item): MenuLinkProps => {
    const {
      url: link = '',
      link_text: children = '',
      open_in_new_tab: newtab = false,
    } = item;

    return {
      link,
      children,
      newtab,
    };
  });
};
