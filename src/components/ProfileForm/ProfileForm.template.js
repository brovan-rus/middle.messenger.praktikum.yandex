// language=hbs
export default `
    <form class="{{styles.form}}" id="profileEditForm">
        {{#each fields}}
            {{>formInput this}}
        {{/each}}
        {{{Button}}}
    </form>
`;
