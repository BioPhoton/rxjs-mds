import {withNotes} from '@storybook/addon-notes';
import {storiesOf} from '@storybook/angular';
import markdownText from './design-token.component.md';

export const designTokenStories = storiesOf('Design Token', module)
  .addDecorator(withNotes)
  .add(
    'general',
    () => (``),
    {
      notes: {markdown: markdownText}
    }
  );
