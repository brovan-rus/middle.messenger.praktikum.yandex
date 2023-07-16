// language=hbs
export default `
    <section class="{{styles.container}}">
        <header class="{{styles.header}}">
            <div class="{{styles.profileContainer}}">
                <div class="{{styles.avatar}}"></div>
                <h1 class="{{styles.title}}">{{chatName}}</h1>
            </div>
            <button class="{{styles.headerButton}}"></button>
        </header>
        <ul class="{{styles.messagesList}}">
            {{#each messages}}
                {{>message this}}
            {{/each}}
        </ul>
        <footer class="{{styles.footer}}">
            <button class="{{styles.attachButton}}"></button>
            <form>{{{ChatInput}}}</form>
            {{{Button}}}
        </footer>
    </section>`;
