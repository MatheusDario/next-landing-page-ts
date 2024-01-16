import { mapMenu, mapMenuLinks } from './map-menu';

describe('map-menu', () => {
  it('should return a predefined object if no data', () => {
    const menu = mapMenu();
    expect(menu.newtab).toBe(false);
    expect(menu.text).toBe('');
    expect(menu.srcimg).toBe('');
    expect(menu.link).toBe('');
  });

  it('should map menu to match keys and values required', () => {
    const menu = mapMenu({
      logo_link: '#intro',
      logo_text: 'Logo',
      logo: {
        data: {
          attributes: {
            url: 'logo.svg',
          },
        },
      },
      menu_links: [
        {
          url: '#intro',
          link_text: 'Intro',
          open_in_new_tab: false,
        },
        {
          url: '#top3',
          link_text: 'Top3',
          open_in_new_tab: false,
        },
      ],
    });
    expect(menu.newtab).toBe(false);
    expect(menu.text).toBe('Logo');
    expect(menu.link).toBe('#intro');
    expect(menu.srcimg).toBe('logo.svg');
    expect(menu.links[0].newtab).toBe(false);
    expect(menu.links[0].children).toBe('Intro');
    expect(menu.links[0].link).toBe('#intro');
  });

  it('should return an empty array if no links', () => {
    const links = mapMenuLinks();
    expect(links).toEqual([]);
  });

  it('should map links if links passed', () => {
    const links = mapMenuLinks([
      {
        url: '#intro',
        link_text: 'Intro',
        open_in_new_tab: false,
      },
      {},
    ]);
    expect(links[0].newtab).toBe(false);
    expect(links[0].children).toBe('Intro');
    expect(links[0].link).toBe('#intro');
  });
});
