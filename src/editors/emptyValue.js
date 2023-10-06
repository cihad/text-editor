export const getEmptyTextNode = (text = '') => ({
  detail: 0,
  format: 0,
  mode: 'normal',
  style: '',
  text: text,
  type: 'text',
  version: 1,
});

export function getEmptyRoot(child) {
  const value = {
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

  if (child) value.root.children[0].children.push(child);

  return value;
}
