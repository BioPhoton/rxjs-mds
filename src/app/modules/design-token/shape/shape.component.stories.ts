import {withNotes} from '@storybook/addon-notes';
import {storiesOf} from '@storybook/angular';
import markdownText from './shape.component.md';

export const shapeStories = storiesOf('Design Token/Shape', module)
  .addDecorator(withNotes)
  .add(
    'overview',
    () => (''),
    {
      notes: {markdown: markdownText}
    }
  );
