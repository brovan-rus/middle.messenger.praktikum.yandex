const makeTemplate = (
  {
    id,
    testProp,
    child,
    childrenArray,
  }: {
    id: string;
    testProp?: string;
    child?: string;
    childrenArray?: string;
  } = { id: 'test' },
) => {
  return `<div id="${id}">
            ${child ? `{{{${child}}}}` : ``}
            ${
              childrenArray
                ? `{{#each ${childrenArray}}} {{{this}}} {{/each}}`
                : ''
            }
            {{${testProp}}}
          </div>`;
};

const getTemplate = (props?: Record<string, string>) => {
  return makeTemplate({
    id: 'test',
    testProp: 'text',
    ...props,
  });
};

export default getTemplate;
