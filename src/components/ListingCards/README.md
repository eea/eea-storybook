# Listing Block cards

Open **EEA / Listing Block / Cards** in Storybook. The stories use the actual
`UniversalCard` component and local fixtures; popup examples need no Plone backend.

The Listing Block has two card types, **Card** and **List item**, configured
with controls instead of separate templates. The stories show their flavours:
the visualization card (a Card with the top accent border, the visualization
elements order and the benchmark level), the card with the image on top, left
or right, the image-only card, and the list item in its default and compact
sizes. **Legacy templates** shows that the eight former card templates saved
on existing pages still render.

Defaults: content type off, date on, description off and CTA popup off. The
controls expose the card elements (content type, date, description, benchmark
level, tags, call to action), their order, the popup, the top accent border and
edit mode.

Title, preview and CTA share the same destination on every card. At widths of
1280 px or more, enabling the popup opens the seeded content. Below that width,
links navigate to the local example details page. Use the preview's Back button
to return.

The addon uses `workspace:*`: `make develop` clones the `new-cards-layout`
branch configured in `mrs.developer.json`, and Yarn uses that checkout directly.
Run `make develop` before the first `yarn install`. After that branch is
released, update `mrs.developer.json` to the desired branch. For development,
check out the addon under `src/addons/volto-listing-block` (`yarn develop`),
then run `yarn install` and `yarn storybook` with Node 22 (as required by the
project). A local sibling checkout may also be linked at that path. Asset paths
support both localhost and a Storybook deployed in a subdirectory.
