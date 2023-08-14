// language=hbs
export default `
    <input name="avatar" type="file" class="{{styles.visuallyHidden}}">
    {{#each fields}}
        {{{this}}}
    {{/each}}
    {{{Button}}}
`;
