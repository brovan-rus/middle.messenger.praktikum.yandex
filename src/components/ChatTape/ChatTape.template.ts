// language=hbs
export default `
    <header class="{{styles.header}}">
        <div class="{{styles.profileContainer}}">
            <div class="{{styles.avatar}}"></div>
            <h1 class="{{styles.title}}">{{chatName}}</h1>
        </div>
        <button data-action="openChatMenu" class="{{styles.headerButton}}"></button>
    </header>
    {{{MessagesList}}}
    <footer class="{{styles.footer}}">
        <button class="{{styles.attachButton}}"></button>
        <form class="{{styles.form}}">
            {{{ChatInput}}}
            {{{Button}}}
        </form>
    </footer>
`;
