import {
  mapImageGrid,
  mapSectionContent,
  mapSectionTwoColumns,
  mapSections,
  mapTextGrid,
} from './map-sections';

import pagesFakeData from './dados.json';

describe('map-sections', () => {
  it('shuld render predefined section if no data', () => {
    const data = mapSections();
    expect(data).toEqual([]);
  });

  it('shuld render sections with correct data', () => {
    const data = mapSections(pagesFakeData[0].attributes.sections);
    expect(data[0].component).toBe('section.section-two-columns');
  });

  it('should map section two columns, predefined if no data', () => {
    const data = mapSectionTwoColumns();
    expect(data.background).toBe(false);
    expect(data.component).toBe('');
    expect(data.sectionid).toBe('');
    expect(data.srcimg).toBe('');
    expect(data.text).toBe('');
    expect(data.title).toBe('');
  });

  it('should map section two columns, if was data', () => {
    const data = mapSectionTwoColumns({
      id: 1,
      __component: 'section.section-two-columns',
      title: 'LADING PAGE DESENVOLVIDA EM HTML, CSS E JS',
      description:
        'One domain where we see high value is in training LLMs on reference documentation, enabling developers to more quickly find solutions or get answers about the purpose or behavior of code snippets. MDNs mission is to provide a blueprint for a better internet and empower a new generation of developers and content creators to build it. We see a path forward to “overlay” useful AI-driven helpers on top of MDNs canonical web dev documentation to aid developers in new ways. Of course, human-authored canonica',
      image: {
        data: {
          id: 2,
          attributes: {
            name: 'barber.svg',
            alternativeText: null,
            caption: null,
            width: 1144,
            height: 715,
            formats: null,
            hash: 'barber_63ec0556f4',
            ext: '.svg',
            mime: 'image/svg+xml',
            size: 20.22,
            url: 'https://res.cloudinary.com/dlsrwvbeo/image/upload/v1702163614/barber_63ec0556f4.svg',
            previewUrl: null,
            provider: 'cloudinary',
            provider_metadata: {
              public_id: 'barber_63ec0556f4',
              resource_type: 'image',
            },
            createdAt: '2023-12-09T23:13:35.761Z',
            updatedAt: '2023-12-09T23:13:35.761Z',
          },
        },
      },
      metada: {
        id: 1,
        name: 'intro',
        section_id: 'intro',
        background: true,
      },
    });
    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-two-columns');
    expect(data.sectionid).toBe('intro');
    expect(data.srcimg).toBe(
      'https://res.cloudinary.com/dlsrwvbeo/image/upload/v1702163614/barber_63ec0556f4.svg',
    );
    expect(data.text).toBe(
      'One domain where we see high value is in training LLMs on reference documentation, enabling developers to more quickly find solutions or get answers about the purpose or behavior of code snippets. MDNs mission is to provide a blueprint for a better internet and empower a new generation of developers and content creators to build it. We see a path forward to “overlay” useful AI-driven helpers on top of MDNs canonical web dev documentation to aid developers in new ways. Of course, human-authored canonica',
    );
    expect(data.title).toBe('LADING PAGE DESENVOLVIDA EM HTML, CSS E JS');
  });

  it('should map section content if no data', () => {
    const data = mapSectionContent();
    expect(data.background).toBe(false);
    expect(data.component).toBe('');
    expect(data.html).toBe('');
    expect(data.sectionid).toBe('');
    expect(data.title).toBe('');
  });

  it('should map section content if no data', () => {
    const data = mapSectionContent({
      id: 1,
      __component: 'section.section-content',
      title: 'TOP 3 TRABALHOS',
      content:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus quibusdam laborum officiis iste beatae obcaecati repellat, et veritatis provident culpa iusto id sequi corrupti magni repellendus, placeat corporis esse architecto.\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sequi facilis, autem, cupiditate consequuntur, rem accusantium impedit nesciunt architecto corporis possimus! Sed laborum veniam quod voluptatem expedita, quasi ratione possimus!\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sunt explicabo dignissimos. Distinctio autem praesentium corporis suscipit nostrum, beatae asperiores reprehenderit quasi ratione, vitae minus iusto ipsa reiciendis et! Obcaecati?',
      metada: {
        id: 2,
        name: 'top3',
        section_id: 'top3jobs',
        background: false,
      },
    });
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-content');
    expect(data.html).toBe(
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus quibusdam laborum officiis iste beatae obcaecati repellat, et veritatis provident culpa iusto id sequi corrupti magni repellendus, placeat corporis esse architecto.\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sequi facilis, autem, cupiditate consequuntur, rem accusantium impedit nesciunt architecto corporis possimus! Sed laborum veniam quod voluptatem expedita, quasi ratione possimus!\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sunt explicabo dignissimos. Distinctio autem praesentium corporis suscipit nostrum, beatae asperiores reprehenderit quasi ratione, vitae minus iusto ipsa reiciendis et! Obcaecati?',
    );
    expect(data.sectionid).toBe('top3jobs');
    expect(data.title).toBe('TOP 3 TRABALHOS');
  });

  it('should map grid section /or grid text was data', () => {
    const data = mapTextGrid();
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-text');
    expect(data.sectionid).toBe('');
    expect(data.title).toBe('');
    expect(data.description).toBe('');
    expect(data.grid).toEqual([]);
  });

  it('should map grid section /or grid text was data', () => {
    const data = mapTextGrid({
      id: 1,
      __component: 'section.section-grid',
      title: 'DESCRIÇÃO DOS PRINCIPAIS TRABALHOS',
      description: 'Uma breve descrição do asunto que está por vim',
      metada: {
        id: 3,
        name: 'description',
        section_id: 'description',
        background: true,
      },
      text_grid: [
        {
          id: 1,
          title: 'Titulo 1',
          description:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus quibusdam laborum officiis iste beatae obcaecati repellat, et veritatis provident culpa iusto id sequi corrupti magni repellendus, placeat corporis esse architecto.',
        },
        {
          id: 2,
          title: 'Titulo 2',
          description:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus quibusdam laborum officiis iste beatae obcaecati repellat, et veritatis provident culpa iusto id sequi corrupti magni repellendus, placeat corporis esse architecto.',
        },
        {
          id: 3,
          title: 'Titulo 3',
          description:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus quibusdam laborum officiis iste beatae obcaecati repellat, et veritatis provident culpa iusto id sequi corrupti magni repellendus, placeat corporis esse architecto.',
        },
      ],
      image_grid: [],
    });
    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-grid-text');
    expect(data.sectionid).toBe('description');
    expect(data.title).toBe('DESCRIÇÃO DOS PRINCIPAIS TRABALHOS');
    expect(data.description).toBe(
      'Uma breve descrição do asunto que está por vim',
    );
    expect(data.grid[0].title).toBe('Titulo 1');
    expect(data.grid[0].description).toBe(
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus quibusdam laborum officiis iste beatae obcaecati repellat, et veritatis provident culpa iusto id sequi corrupti magni repellendus, placeat corporis esse architecto.',
    );
  });

  it('should map grid image without data', () => {
    const data = mapImageGrid();
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-image');
    expect(data.sectionid).toBe('');
    expect(data.title).toBe('');
    expect(data.description).toBe('');
    //expect(data.grid).toEqual([]);
  });

  it('should map grid image with data', () => {
    const data = mapImageGrid({
      id: 2,
      __component: 'section.section-grid',
      title: 'GALERIA',
      description: 'Breve descrição',
      metada: {
        id: 4,
        name: 'gallery',
        section_id: 'gallery',
        background: false,
      },
      text_grid: [],
      image_grid: [
        {
          id: 1,
          images: {
            data: [
              {
                id: 5,
                attributes: {
                  name: 'ferrari.jpg',
                  alternativeText: null,
                  url: 'https://res.cloudinary.com/dlsrwvbeo/image/upload/v1702167564/ferrari_b04d5b11bc.jpg',
                },
              },
              {
                id: 6,
                attributes: {
                  name: 'bmw.jpg',
                  alternativeText: null,
                  url: 'https://res.cloudinary.com/dlsrwvbeo/image/upload/v1702167564/bmw_653b2050bc.jpg',
                },
              },
              {
                id: 7,
                attributes: {
                  name: 'lamborginhi.jpg',
                  alternativeText: null,
                  url: 'https://res.cloudinary.com/dlsrwvbeo/image/upload/v1702167564/lamborginhi_aa4b0d94c3.jpg',
                },
              },
              {
                id: 8,
                attributes: {
                  name: 'mercedes.jpg',
                  alternativeText: null,
                  url: 'https://res.cloudinary.com/dlsrwvbeo/image/upload/v1702167564/mercedes_cd10b1e920.jpg',
                },
              },
              {
                id: 9,
                attributes: {
                  name: 'road.jpg',
                  alternativeText: null,
                  url: 'https://res.cloudinary.com/dlsrwvbeo/image/upload/v1702167565/road_fae120670f.jpg',
                },
              },
              {
                id: 10,
                attributes: {
                  name: 'audi.jpg',
                  alternativeText: null,
                  url: 'https://res.cloudinary.com/dlsrwvbeo/image/upload/v1702167565/audi_ca65926b59.jpg',
                },
              },
            ],
          },
        },
      ],
    });
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-image');
    expect(data.sectionid).toBe('gallery');
    expect(data.title).toBe('GALERIA');
    expect(data.description).toBe('Breve descrição');
    expect(data.grid[0].srcImg[1]).toEqual(
      'https://res.cloudinary.com/dlsrwvbeo/image/upload/v1702167564/bmw_653b2050bc.jpg',
    );
    expect(data.grid[0].altText[0]).toEqual(null);
    //expect(data.grid[0]).toEqual('');
  });
});
