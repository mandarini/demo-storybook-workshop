import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { KaterinaComponent } from './katerina.component';

export default {
  title: 'KaterinaComponent',
  component: KaterinaComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<KaterinaComponent>;

const Template: Story<KaterinaComponent> = (args: KaterinaComponent) => ({
  component: KaterinaComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
    title:  'Hello ng-be',
}