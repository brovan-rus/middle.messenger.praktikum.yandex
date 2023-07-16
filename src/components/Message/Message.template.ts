// language=hbs
export default `
    <li class="{{styles.container}} {{#if sentByAuthor}}{{styles.containerHighlighted}}{{/if}}">
        <p class="{{styles.text}}">{{text}}</p>
        <p class="{{styles.time}}{{#if delivered}} {{styles.serviceInfoHighlighted}}{{/if}}">
            {{time}}
        </p>
    </li>`;
