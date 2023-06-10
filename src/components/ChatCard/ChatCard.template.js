// language=hbs
export default `
    <div class="{{styles.line}}"></div>
    <div class="{{styles.container}} {{#if active}}{{styles.containerActive}}{{/if}}">
        <div class="{{styles.avatar}}"></div>
        <div class="{{styles.textContatiner}}">
            <h2 class="{{styles.title}}">{{name}}</h2>
            <p class="{{styles.text}}">{{text}}</p>
        </div>
        <div class="{{styles.info}}">
            <p class="{{styles.dateTimeText}}">{{timeDay}}</p>
            {{#if newMessages}}
                <div class="{{styles.notification}}">
                    <div class="{{styles.notificationText}}">
                        {{newMessages}}
                    </div>
                </div>
            {{/if}}
        </div>
    </div>
`