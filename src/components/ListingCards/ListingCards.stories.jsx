import React, { useEffect, useMemo } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import UniversalCard from '@eeacms/volto-listing-block/components/UniversalCard/UniversalCard';
import '@eeacms/volto-listing-block/less/visualization-cards.less';

const variants = {
  visualizationCard: 'Visualization card',
  card: 'Default card',
  imageCard: 'Image card',
  imageOnLeft: 'Image on left',
  imageOnRight: 'Image on right',
  item: 'Listing item',
  searchItem: 'Search item',
  simpleItem: 'Simple item',
};

const assetPath = (name) => (typeof window === 'undefined' ? `/${name}` : new URL(name, window.location.href).pathname);

const previewURL = assetPath('listing-card-preview.svg');

const item = {
  '@id': assetPath('listing-card-details.html'),
  '@type': 'visualization',
  title: 'Renewable energy in Europe',
  Title: 'Renewable energy in Europe',
  type_title: 'Data visualization',
  description: 'An illustrative overview of renewable energy across four years.',
  Description: 'An illustrative overview of renewable energy across four years.',
  EffectiveDate: '2026-08-20T12:00:00Z',
  preview_image_url: previewURL,
  image_field: 'image',
  image: { scales: { preview: { download: previewURL } } },
  benchmark_level: ['2'],
};

const ListingCardsDemo = ({ variant, displayContentType, displayPublishingDate, displayDescription, enableCTAPopup, showCTA, isEditMode, allVariants = false }) => {
  const store = useMemo(() => {
    const initialState = {
      screen: { width: typeof window === 'undefined' ? 1440 : window.innerWidth },
      vocabularies: {
        'collective.taxonomy.benchmark_level': {
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
                  value: [{ type: 'p', children: [{ text: 'This is local demonstration content. The card title, preview image and CTA all open these same details.' }] }],
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
    const updateWidth = () => store.dispatch({ type: 'STORYBOOK_LISTING_RESIZE', width: window.innerWidth });
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, [store]);

  const selected = allVariants ? Object.keys(variants) : [variant];
  return (
    <Provider store={store}>
      <div style={{ padding: '2rem', maxWidth: '1440px', margin: 'auto' }}>
        <p>Click a title, preview image or Read more to open the same details. Popups open at widths of 1280 px and above; smaller viewports use links.</p>
        <div style={{ display: 'grid', gridTemplateColumns: allVariants ? 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))' : 'minmax(0, 420px)', gap: '2rem' }}>
          {selected.map((type) => (
            <section key={type} className={type === 'visualizationCard' ? 'cardsVisualization' : ''}>
              {allVariants && <h2 style={{ fontSize: '1.1rem' }}>{variants[type]}</h2>}
              <div className="ui cards">
                <UniversalCard
                  item={item}
                  description={item.description}
                  preview_image_url={item.preview_image_url}
                  isEditMode={isEditMode}
                  itemModel={{
                    '@type': type,
                    hasContentType: displayContentType,
                    hasDate: displayPublishingDate,
                    hasDescription: displayDescription,
                    hasImage: true,
                    hasLink: true,
                    titleOnImage: type === 'imageCard',
                    maxTitle: 4,
                    maxDescription: 4,
                    enableCTAPopup,
                    callToAction: { enable: showCTA, label: 'Read more', urlTemplate: '$URL#details' },
                  }}
                />
              </div>
            </section>
          ))}
        </div>
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
    docs: { description: { component: 'Listing Block card variations. Visualization defaults: content type off, publishing date on, description off and CTA popup off. Title and preview actions follow the CTA across all variations. Use a viewport at least 1280 px wide to try popups.' } },
  },
  argTypes: {
    variant: { control: 'select', options: Object.keys(variants) },
    displayContentType: { name: 'Display content type', control: 'boolean', description: 'Visualization cards: show the type label above the title.' },
    displayPublishingDate: { name: 'Display publishing date', control: 'boolean', description: 'Visualization cards show the publishing date below the title.' },
    displayDescription: { name: 'Display description', control: 'boolean' },
    enableCTAPopup: { name: 'Enable CTA content popup', control: 'boolean' },
    showCTA: { name: 'Show CTA', control: 'boolean' },
    isEditMode: { name: 'Edit mode', control: 'boolean' },
    allVariants: { table: { disable: true } },
  },
  args: {
    variant: 'visualizationCard',
    displayContentType: false,
    displayPublishingDate: true,
    displayDescription: false,
    enableCTAPopup: false,
    showCTA: true,
    isEditMode: false,
  },
};

export const VisualizationDefaults = {};
export const WithContentTypeAndDescription = {
  args: { displayContentType: true, displayDescription: true },
};
export const WithoutPublishingDate = {
  args: { displayPublishingDate: false },
};
export const PopupEnabled = {
  args: { enableCTAPopup: true },
  parameters: { viewport: { defaultViewport: 'responsive' } },
};
export const AllCardVariations = { args: { allVariants: true } };
export const AllCardVariationsWithPopup = {
  args: { allVariants: true, enableCTAPopup: true },
  parameters: { viewport: { defaultViewport: 'responsive' } },
};
export const Editing = { args: { allVariants: true, isEditMode: true } };
