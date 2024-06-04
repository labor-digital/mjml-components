import { addCodeExample } from '../../stories/helpers/code-example';
import LaborAdobeRoundedButton from "./LaborAdobeRoundedButton";
import { mjml2html } from 'mjml';

export default {
  title: 'Labor/Adobe/RoundedButton',
  argTypes: {
    label: { control: 'text' },
    className: { control: 'text' }
  },
};
const Template = ({ label, className }) => {
  return mjml2html(<LaborAdobeRoundedButton />);
};
export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  className: 'button-primary',
};
addCodeExample(Primary, Template)
