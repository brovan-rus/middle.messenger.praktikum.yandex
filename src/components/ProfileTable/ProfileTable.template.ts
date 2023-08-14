// language=hbs
export default `
    <div class="{{styles.table}}">
        <div class="
            {{styles.avatarContainer }}
            {{#if avatar}}{{styles.avatarContainerWithAvatar}}{{/if}}
            {{#if form}} {{styles.changeAvatar}} {{/if}}"
        >
            {{#if avatar}}
                <img alt="avatar image"
                     {{#if form }}data-action="changeAvatar"{{/if}}
                     src="{{avatar}}"
                     class="{{styles.avatar}}"
                />
            {{else}}
                <div class="{{styles.noAvatar}}"
                     {{#if form }}data-action="changeAvatar"{{/if}}>
                </div>
            {{/if}}
        </div>
        {{#if form}}
            {{{ProfileForm}}}
        {{else}}
            <div class="{{styles.fields}}">
                {{#each fields}}
                    {{{this}}}
                {{/each}}
            </div>
        {{/if}}
        <div class="{{styles.links}}">
            {{#each links}}
                {{{this}}}
            {{/each}}
        </div>
    </div>
`;
