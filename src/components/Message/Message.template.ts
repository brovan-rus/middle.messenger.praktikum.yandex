// language=hbs
export default `
    <p class="{{styles.text}}">{{text}}</p>
    <p class="{{styles.time}}{{#if delivered}} {{styles.serviceInfoHighlighted}}{{/if}}">
        {{time}}
    </p>
`;
