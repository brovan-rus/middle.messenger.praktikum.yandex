// language=hbs
export default `
    <p class="{{styles.text}}">{{content}}</p>
    <p class="{{styles.time}}{{#if delivered}} {{styles.serviceInfoHighlighted}}{{/if}}">
        {{time}}
    </p>
`;
