// language=hbs
export default `
    <div class="{{styles.line}}"></div>
    <div class="{{styles.container}} {{#if active}}{{styles.containerActive}}{{/if}}">
        {{#if avatar}}
            <img class="{{styles.avater}}" alt="avatar" src="{{avatar}}"/>
        {{else}}
            <div class="{{styles.noAvatar}} {{styles.avatar}}"></div>
        {{/if}}
        <div class="{{styles.textContatiner}}">
            <h2 class="{{styles.title}}">{{title}}</h2>
            <p class="{{styles.text}}">{{last_message}}</p>
        </div>
        <div class="{{styles.info}}">
            <p class="{{styles.dateTimeText}}">{{timeDay}}</p>
            {{#if unreadCount}}
                <div class="{{styles.notification}}">
                    <div class="{{styles.notificationText}}">
                        {{unreadCount}}
                    </div>
                </div>
            {{/if}}
        </div>
    </div>
`;
