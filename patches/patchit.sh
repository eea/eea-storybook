#!/bin/bash
patch --quiet -p0 -N node_modules/razzle/config/createJestConfig.js < patches/razzle-jest.patch

if [ -f src/addons/volto-eea-design-system/src/ui/Card/Card.stories.jsx ]; then
  patch --quiet -p0 -N src/addons/volto-eea-design-system/src/ui/Card/Card.stories.jsx < patches/volto-eea-design-system-card-story-image.patch
fi
