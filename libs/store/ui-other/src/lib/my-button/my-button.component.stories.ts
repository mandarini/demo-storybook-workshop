import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { MyButtonComponent } from './my-button.component';

export default {
  title: 'MyButtonComponent',
  component: MyButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<MyButtonComponent>;

const Template: Story<MyButtonComponent> = (args: MyButtonComponent) => ({
  component: MyButtonComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  bgcolor: '#ff0000',
  btntext: 'Click me',
  disabled: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  bgcolor: '#888888',
  btntext: 'Click me',
  disabled: true,
};

