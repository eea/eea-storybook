# Listing Block cards

Open **EEA / Listing Block / Cards** in Storybook. The stories use the actual
`UniversalCard` component and local fixtures; popup examples need no Plone backend.

Visualization defaults: content type off, publishing date on, description off,
and CTA popup off. The controls expose all four options, CTA visibility and edit
mode. The all-variation examples cover all eight registered card templates.

Title, preview and CTA share the same destination. At widths of 1280 px or more,
enabling the popup opens the seeded content. Below that width, links navigate to
the local example details page. Use the preview's Back button to return.

The addon dependency and `mrs.developer.json` currently select
`ims-vizualization-cards` so these stories run against the new implementation.
After that branch is released, update both to the released version/develop branch.
For development, check out the addon under `src/addons/volto-listing-block`
(`yarn develop`), then run `yarn install` and `yarn storybook` with Node 22
(as required by the project). A local sibling checkout may also be linked at that
path. Asset paths support both localhost and a Storybook deployed in a subdirectory.
