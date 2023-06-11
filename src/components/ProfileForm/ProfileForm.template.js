// language=hbs
export default `
    <form class="{{styles.form}}" type="submit" id="profileEditForm">
        {{#each fields}}
            {{>formInput this}}
        {{/each}}
        {{{Button}}}
    </form>
`