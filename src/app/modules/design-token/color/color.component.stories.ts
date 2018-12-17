import {withNotes} from '@storybook/addon-notes';
import {storiesOf} from '@storybook/angular';
import {ColorComponent} from './color.component';
import markdownText from './color.component.md';
import {ColorsNames} from './token-values';

export const colorStories = storiesOf('Design Token/Color', module)
  .addDecorator(withNotes)
  .add(
    'overview',
    () => ({
      component: ColorComponent,
      props: {
        colors: [
          {description: ColorsNames.Background, className: 'mds-c-' + ColorsNames.Background},
          {description: ColorsNames.Line, className: 'mds-c-' + ColorsNames.Line},
          {description: ColorsNames.Inactive, className: 'mds-c-' + ColorsNames.Inactive},
          {description: ColorsNames.Value1, className: 'mds-c-' + ColorsNames.Value1},
          {description: ColorsNames.Value2, className: 'mds-c-' + ColorsNames.Value2},
          {description: ColorsNames.Value3, className: 'mds-c-' + ColorsNames.Value3},
          {description: ColorsNames.Value4, className: 'mds-c-' + ColorsNames.Value4}
        ],
      },
    }),
    {
      notes: {markdown: markdownText}
    }
  );
