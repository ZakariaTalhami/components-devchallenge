import Button from '../components/button/Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    leftIcon: {
      description: "Any Goolge Icon name"
    },
    rightIcon: {
      description: "Any Goolge Icon name"
    },
    onClick: {
      action: 'onClick'
    } 
  },
};

const template = ({ label, ...args }) => <Button {...args} children={label} />;

export const DefaultButton = template.bind({});
DefaultButton.args = {
  label: 'Default Button',
  shadowed: true,
};

export const PrimaryButton = template.bind({});
PrimaryButton.args = {
  label: 'Primary Button',
  color: 'primary',
  shadowed: true,
};

export const SecondaryButton = template.bind({});
SecondaryButton.args = {
  label: 'Secondary Button',
  color: 'secondary',
  shadowed: true,
};

export const DangerButton = template.bind({});
DangerButton.args = {
  label: 'Danger Button',
  color: 'danger',
  shadowed: true,
};

export const OutlineButton = template.bind({});
OutlineButton.args = {
  label: 'Outline Button',
  color: 'primary',
  variant: 'outline',
};

export const TextButton = template.bind({});
TextButton.args = {
  label: 'Text Button',
  color: 'primary',
  variant: 'text',
};

export const SmallButton = template.bind({});
SmallButton.args = {
  label: 'Small Button',
  color: 'primary',
  size: 'sm',
};

export const LargeButton = template.bind({});
LargeButton.args = {
  label: 'Large Button',
  color: 'primary',
  size: 'lg',
};

export const LeftIconButton = template.bind({});
LeftIconButton.args = {
  leftIcon: "home",
  label: 'Home',
  color: 'primary',
};

export const RightIconButton = template.bind({});
RightIconButton.args = {
  rightIcon: "login",
  label: 'Login',
  color: 'primary',
};
