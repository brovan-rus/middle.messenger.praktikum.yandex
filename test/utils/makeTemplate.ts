export const makeTemplate = ({
  id,
  testProp,
  child,
  childrenArray,
}: {
  id: string;
  testProp?: string;
  child?: string;
  childrenArray?: string;
}) => {
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
