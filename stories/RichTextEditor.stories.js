import { RichTextEditor as RichText } from '../src';

function Template(args) {
  return <RichText {...args} />;
}

const initialValue = {
  root: {
    children: [
      {
        children: [],
        direction: null,
        format: '',
        indent: 0,
        type: 'paragraph',
        version: 1,
      },
    ],
    direction: null,
    format: '',
    indent: 0,
    type: 'root',
    version: 1,
  },
};

export default {
  title: 'RichTextEditor',
  component: RichText,
  argTypes: {
    editable: { control: 'boolean' },
    onChange: { action: 'onChange' },
    treeView: {
      control: 'boolean',
    },
    placeholder: {
      control: 'text',
    },
  },
  parameters: {
    backgrounds: {
      disable: true,
      values: [
        { name: 'white', value: '#fff' },
        { name: 'gray', value: '#f0f0f0' },
      ],
    },
    actions: { argTypesRegex: '^on.*' },
  },
};

export const RichTextEditor = Template.bind({});
RichTextEditor.args = {
  value: JSON.stringify(initialValue),
};
