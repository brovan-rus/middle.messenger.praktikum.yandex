// language=hbs
export default `
    <button id={{id}} class="
        {{styles.button}} 
        {{#if backButton}}
            {{styles.backButton}}
        {{/if}}
        {{#if formButton}}
            {{styles.formButton}}
        {{/if}}"
    >
        {{text}}
    </button>
`;
