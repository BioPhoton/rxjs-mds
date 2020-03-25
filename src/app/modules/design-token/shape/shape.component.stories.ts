import {withNotes} from '@storybook/addon-notes';
import {moduleMetadata, storiesOf} from '@storybook/angular';
import overviewMarkdownText from './shape.component.md';
import {ShapeComponent} from './shape.component';
import {ValueModule} from '../../components/value/value.module';

export const shapeStories = storiesOf('Design Token/Shape', module)
  .addDecorator(withNotes)
  .addDecorator(
    moduleMetadata({
      imports: [ValueModule],
    })
  )
  .add(
    'overview',
    () => ({template:''}),
    {
      notes: {markdown: overviewMarkdownText}
    }
  )
  .add(
    'Type',
    () => ({
      component: ShapeComponent,
      props: {
        shapeTypes: ['rectangle']
      },
    })
  );
