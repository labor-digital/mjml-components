import { addCodeExample } from './helpers/code-example'
export default {
  title: 'Example/Button',
  argTypes: {
    label: { control: 'text' },
    className: { control: 'text' }
  },
};
const Template = ({ label, className }) => {
  return `<button class="${className}">${label}</button>`;
};
export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  className: 'button-primary',
};
addCodeExample(Primary, Template)
