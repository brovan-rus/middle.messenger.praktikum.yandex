// language=hbs
export default `
    <form class="{{styles.form}}" type="submit" id="profileEditForm">
        {{#each fields}}
            {{>profileInput this}}
        {{/each}}
        {{{Button}}}
    </form>
`