/* eslint-disable no-unused-vars */
export const mapSections = (sections = []) => {
  return sections.map((section) => {
    if (section.__component === 'section.section-two-columns') {
      return mapSectionTwoColumns(section);
    }

    if (section.__component === 'section.section-content') {
      return mapSectionContent(section);
    }

    if (section.__component === 'section.section-grid') {
      const { text_grid = [], image_grid = [] } = section;

      if (text_grid.length > 0) {
        return mapTextGrid(section);
      }
      if (image_grid.length > 0) {
        return mapImageGrid(section);
      }
    }
  });
};

export const mapSectionTwoColumns = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    description: text = '',
    image: { data: { attributes: { url: srcimg = '' } = '' } = '' } = '',
    metada: {
      background: $background = false,
      section_id: $sectionid = '',
    } = '',
  } = section;

  return {
    component,
    title,
    text,
    srcimg,
    $background,
    $sectionid,
  };
};

export const mapSectionContent = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    content: html = '',
    metada: {
      background: $background = false,
      section_id: $sectionid = '',
    } = '',
  } = section;

  return {
    component,
    title,
    html,
    $background,
    $sectionid,
  };
};

export const mapTextGrid = (section = {}) => {
  const {
    // eslint-disable-next-line no-unused-vars
    __component: component = '',
    title = '',
    description = '',
    text_grid: grid = [],
    metada: {
      background: $background = false,
      section_id: $sectionid = '',
    } = '',
  } = section;

  return {
    component: 'section.section-grid-text',
    title,
    description,
    $background,
    grid: grid.map((text) => {
      const { title = '', description = '' } = text;

      return {
        title,
        description,
      };
    }),
    $sectionid,
  };
};

export const mapImageGrid = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    description = '',
    image_grid: grid = [],
    metada: {
      background: $background = false,
      section_id: $sectionid = '',
    } = '',
  } = section;

  return {
    component: 'section.section-grid-image',
    title,
    description,
    $background,
    $sectionid,
    grid: grid.map((imgs) => {
      const {
        images: { data = [] },
      } = imgs;

      const srcImg = data.map((img) => {
        const { attributes: { url = '' } = {} } = img;

        return url;
      });

      const altText = data.map((img) => {
        const { attributes: { alternativeText = '' } = {} } = img;

        return alternativeText;
      });

      return { srcImg, altText };
    }),
  };
};
