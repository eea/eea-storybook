import React, { useEffect, useMemo } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import UniversalCard from '@eeacms/volto-listing-block/components/UniversalCard/UniversalCard';
import { CARD_ELEMENTS, VISUALIZATION_ELEMENTS } from '@eeacms/volto-listing-block/components/UniversalCard/elements';
import '@eeacms/volto-listing-block/less/visualization-cards.less';

// The Listing Block has two card types, Card and List item; everything else
// is a control of these. Each flavour below is one configuration.
const flavours = {
  visualization: {
    label: 'Visualization card',
    itemModel: {
      '@type': 'card',
      imagePosition: 'top',
      elementsOrder: VISUALIZATION_ELEMENTS,
      hasBenchmarkLevel: true,
      styles: { 'topAccent:bool': true },
    },
  },
  card: {
    label: 'Card, image on top',
    itemModel: { '@type': 'card', imagePosition: 'top' },
  },
  cardLeft: {
    label: 'Card, image on the left',
    itemModel: { '@type': 'card', imagePosition: 'left' },
  },
  cardRight: {
    label: 'Card, image on the right',
    itemModel: { '@type': 'card', imagePosition: 'right' },
  },
  overlay: {
    label: 'Card, image only (title on image)',
    itemModel: {
      '@type': 'card',
      imagePosition: 'top',
      contentMode: 'overlay',
      titleOnImage: true,
    },
  },
  listItem: {
    label: 'List item',
    itemModel: { '@type': 'item', imagePosition: 'left' },
  },
  compact: {
    label: 'List item, compact',
    itemModel: { '@type': 'item', imagePosition: 'none', size: 'compact' },
  },
};

// The former card templates, saved on existing pages: they are converted on
// the fly to the card types above.
const legacyTemplates = {
  visualizationCard: 'Visualization Card',
  card: 'Card (default)',
  imageCard: 'Image Card',
  imageOnLeft: 'Image on left',
  imageOnRight: 'Image on right',
  item: 'Listing Item',
  searchItem: 'Search Item',
  simpleItem: 'Simple Item',
};

const orders = {
  default: CARD_ELEMENTS,
  visualization: VISUALIZATION_ELEMENTS,
  titleFirst: ['title', 'date', 'image', 'description', 'contentType', 'benchmark', 'tags', 'cta'],
};

const assetPath = (name) => (typeof window === 'undefined' ? `/${name}` : new URL(name, window.location.href).pathname);

const previewURL = assetPath('listing-card-preview.svg');

const item = {
  '@id': assetPath('listing-card-details.html'),
  '@type': 'Document',
  title: 'Renewable energy in Europe',
  Title: 'Renewable energy in Europe',
  type_title: 'Data visualization',
  description: 'An illustrative overview of renewable energy across four years.',
  Description: 'An illustrative overview of renewable energy across four years.',
  EffectiveDate: '2026-08-20T12:00:00Z',
  Subject: ['Energy', 'Climate'],
  image_field: 'image',
  image: { scales: { preview: { download: previewURL } } },
  benchmark_level: ['2'],
};

const useDemoStore = () => {
  const store = useMemo(() => {
    const initialState = {
      screen: {
        width: typeof window === 'undefined' ? 1440 : window.innerWidth,
      },
      userSession: { token: null },
      search: { subrequests: {} },
      vocabularies: {
        'collective.taxonomy.benchmark_level': {
          loaded: true,
          items: [{ value: '2', label: 'On track' }],
        },
      },
      content: {
        subrequests: {
          [`${item['@id']}#details`]: {
            data: {
              '@id': item['@id'],
              title: 'Renewable energy — example details',
              blocks: {
                intro: {
                  '@type': 'slate',
                  value: [
                    {
                      type: 'p',
                      children: [
                        {
                          text: 'This is local demonstration content. The card title, preview image and CTA all open these same details.',
                        },
                      ],
                    },
                  ],
                },
              },
              blocks_layout: { items: ['intro'] },
            },
          },
        },
      },
    };
    return createStore((state = initialState, action) => (action.type === 'STORYBOOK_LISTING_RESIZE' ? { ...state, screen: { width: action.width } } : state));
  }, []);

  useEffect(() => {
    const updateWidth = () =>
      store.dispatch({
        type: 'STORYBOOK_LISTING_RESIZE',
        width: window.innerWidth,
      });
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, [store]);

  return store;
};

const Card = ({ itemModel, isEditMode }) => (
  <div className="ui cards">
    <UniversalCard
      item={item}
      // a fixed preview, so the examples need no Plone backend
      preview_image_url={previewURL}
      isEditMode={isEditMode}
      itemModel={itemModel}
    />
  </div>
);

const Grid = ({ children, wide }) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: wide ? 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))' : 'minmax(0, 420px)',
      gap: '2rem',
    }}
  >
    {children}
  </div>
);

const ListingCardsDemo = ({ flavour, elementsOrder, displayContentType, displayDate, displayDescription, displayBenchmarkLevel, displayTags, showCTA, enableCTAPopup, topAccent, isEditMode, allFlavours = false, legacy = false }) => {
  const store = useDemoStore();

  // the controls of the "Card elements" sidebar widget
  const controls = {
    hasMetaType: displayContentType,
    hasDate: displayDate,
    hasDescription: displayDescription,
    hasTags: displayTags,
    maxTitle: 4,
    maxDescription: 4,
    enableCTAPopup,
    callToAction: {
      enable: showCTA,
      label: 'Read more',
      urlTemplate: '$URL#details',
    },
  };

  const configured = (key) => {
    const { itemModel } = flavours[key];
    return {
      ...itemModel,
      ...controls,
      ...(allFlavours
        ? {}
        : {
            hasBenchmarkLevel: displayBenchmarkLevel,
            ...(elementsOrder ? { elementsOrder: orders[elementsOrder] } : {}),
            styles: { ...(itemModel.styles || {}), 'topAccent:bool': topAccent },
          }),
    };
  };

  return (
    <Provider store={store}>
      <div style={{ padding: '2rem', maxWidth: '1440px', margin: 'auto' }}>
        <p>Click a title, preview image or Read more to open the same details. Popups open at widths of 1280 px and above; smaller viewports use links.</p>
        {legacy ? (
          <Grid wide>
            {Object.entries(legacyTemplates).map(([type, label]) => (
              // the former Visualization Cards layout gave the top accent
              <section key={type} className={type === 'visualizationCard' ? 'cardsVisualization' : ''}>
                <h2 style={{ fontSize: '1.1rem' }}>{label}</h2>
                <Card isEditMode={isEditMode} itemModel={{ '@type': type, hasImage: true, ...controls }} />
              </section>
            ))}
          </Grid>
        ) : (
          <Grid wide={allFlavours}>
            {(allFlavours ? Object.keys(flavours) : [flavour]).map((key) => (
              <section key={key}>
                {allFlavours && <h2 style={{ fontSize: '1.1rem' }}>{flavours[key].label}</h2>}
                <Card isEditMode={isEditMode} itemModel={configured(key)} />
              </section>
            ))}
          </Grid>
        )}
      </div>
    </Provider>
  );
};

export default {
  title: 'EEA/Listing Block/Cards',
  component: ListingCardsDemo,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Listing Block cards: two card types, Card and List item, configured with controls. The visualization card is a Card with the top accent border, the visualization elements order and the benchmark level. Defaults: content type off, date on, description off and CTA popup off. Title, preview and CTA lead to the same destination on every card. Use a viewport at least 1280 px wide to try popups.',
      },
    },
  },
  argTypes: {
    flavour: {
      name: 'Card',
      control: 'select',
      options: Object.keys(flavours),
      labels: Object.fromEntries(Object.entries(flavours).map(([key, { label }]) => [key, label])),
    },
    elementsOrder: {
      name: 'Elements order',
      control: 'select',
      options: Object.keys(orders),
      description: 'Order of the card elements (drag and drop in the sidebar). Not used by list items.',
    },
    displayContentType: { name: 'Content type', control: 'boolean' },
    displayDate: { name: 'Date', control: 'boolean' },
    displayDescription: { name: 'Description', control: 'boolean' },
    displayBenchmarkLevel: { name: 'Benchmark level', control: 'boolean' },
    displayTags: { name: 'Tags', control: 'boolean' },
    showCTA: { name: 'Call to action', control: 'boolean' },
    enableCTAPopup: { name: 'Enable CTA content popup', control: 'boolean' },
    topAccent: {
      name: 'Top accent border',
      control: 'boolean',
      description: 'Card styling: the thick top border of the visualization card.',
    },
    isEditMode: { name: 'Edit mode', control: 'boolean' },
    allFlavours: { table: { disable: true } },
    legacy: { table: { disable: true } },
  },
  args: {
    flavour: 'visualization',
    elementsOrder: 'visualization',
    displayContentType: false,
    displayDate: true,
    displayDescription: false,
    displayBenchmarkLevel: true,
    displayTags: false,
    showCTA: true,
    enableCTAPopup: false,
    topAccent: true,
    isEditMode: false,
  },
};

export const VisualizationDefaults = {};
export const WithContentTypeAndDescription = {
  args: { displayContentType: true, displayDescription: true },
};
export const WithoutPublishingDate = {
  args: { displayDate: false },
};
export const DefaultCard = {
  args: {
    flavour: 'card',
    elementsOrder: 'default',
    displayBenchmarkLevel: false,
    topAccent: false,
  },
};
export const ListItem = {
  args: { flavour: 'listItem', topAccent: false, displayDescription: true },
};
export const PopupEnabled = {
  args: { enableCTAPopup: true },
  parameters: { viewport: { defaultViewport: 'responsive' } },
};
export const AllCardVariations = { args: { allFlavours: true } };
export const AllCardVariationsWithPopup = {
  args: { allFlavours: true, enableCTAPopup: true },
  parameters: { viewport: { defaultViewport: 'responsive' } },
};
export const Editing = { args: { allFlavours: true, isEditMode: true } };
export const LegacyTemplates = { args: { legacy: true } };
