// language=hbs
export default `
    <div class="{{styles.container}}">
        <div class="{{styles.chatListContainer}}">
            {{{ChatList}}}
        </div>
        <div class="{{styles.chatContainer}}">
            {{#if chatSelected}} {{{ChatTape}}}
            {{else}} {{{Placeholder}}}
            {{/if}}
        </div>
    </div>`;
