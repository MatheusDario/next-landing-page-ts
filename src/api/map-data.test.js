import { mapData } from './map-data.js';

describe('map-data', () => {
  it('should map data even if there is no data', () => {
    const pagesData = mapData()[0];
    expect(pagesData.footerHtml).toBe('');
    expect(pagesData.slug).toBe('');
    expect(pagesData.title).toBe('');
    expect(pagesData.sections).toEqual([]);
    expect(pagesData.menu).toEqual({
      link: '',
      links: [],
      newtab: false,
      srcimg: '',
      text: '',
    });
  });
  it('should map data if there are data', () => {
    const pagesData = mapData([
      {
        footer_text: '<p>Hello</p>',
        slug: 'slug',
        title: 'title',
      },
    ])[0];
    expect(pagesData.footerHtml).toBe('<p>Hello</p>');
    expect(pagesData.slug).toBe('slug');
    expect(pagesData.title).toBe('title');
  });
});
