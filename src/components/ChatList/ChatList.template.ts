// language=hbs
export default `
    <header class="{{styles.chatListHeader}}">
        <a href="#" id="profile" class="{{styles.profileLink}}">
            <span class="{{styles.profileLinkText}}">{{profileLinkText}}</span>
        </a>
        {{{ChatInput}}}
    </header>
    <ul class="{{styles.chatList}}">
        {{#each cards}}
            {{{this}}}
        {{/each}}
    </ul>
`;
