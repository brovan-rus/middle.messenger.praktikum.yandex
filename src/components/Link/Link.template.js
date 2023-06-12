//language=hbs
export default `
    <a 
            id="{{id}}" 
            href="#" 
            class="{{styles.link}} {{#if red}}{{styles.red}}{{/if}} {{#if small}} {{styles.small}} {{/if}}"
    >
        {{text}}
    </a>
`