import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { HeaderComponent } from './header.component';
//IMPORT TOOLBAR MODULE
import { MatToolbarModule } from '@angular/material/toolbar';

export default {
  title: 'HeaderComponent',
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      imports: [MatToolbarModule],
    }),
  ],
} as Meta<HeaderComponent>;

const Template: Story<HeaderComponent> = (args: HeaderComponent) => ({
  component: HeaderComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  title: 'Katerina',
  numberOfItems: 2,
};

export const Secondary = Template.bind({});

Secondary.args = {
  title: 'Jeff',
  numberOfItems: 4,
};
