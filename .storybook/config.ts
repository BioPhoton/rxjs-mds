import { configure, addDecorator } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';

function loadStories() {
  require('../src/stories/index.ts');
}

configure(loadStories, module);
addDecorator(withNotes);
