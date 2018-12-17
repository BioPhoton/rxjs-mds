import {withNotes} from '@storybook/addon-notes';
import {storiesOf} from '@storybook/angular';
import fontMarkdownText from './font.component.md';

import {FontFamilyComponent} from './font-family/font-family.component';
import fontFamilyMarkdownText from './font-family/font-family.component.md';
import {FontSizeComponent} from './font-size/font-size.component';
import fontSizeMarkdownText from './font-size/font-size.component.md';
import {FontStyleComponent} from './font-style/font-style.component';
import fontStyleMarkdownText from './font-style/font-style.component.md';

export const fontStories = storiesOf('Design Token/Font', module)
  .addDecorator(withNotes)
  .add(
    'Overview',
    () => (''),
    {
      notes: {markdown: fontMarkdownText}
    }
  )
  .add(
    'FontFamily',
    () => ({
      component: FontFamilyComponent,
      props: {},
    }),
    {
      notes: {markdown: fontFamilyMarkdownText}
    }
  )
  .add(
    'FontSize',
    () => ({
      component: FontSizeComponent,
      props: {},
    }),
    {
      notes: {markdown: fontSizeMarkdownText}
    }
  )
  .add(
    'FontStyle',
    () => ({
      component: FontStyleComponent,
      props: {},
    }),
    {
      notes: {markdown: fontStyleMarkdownText}
    }
  );
