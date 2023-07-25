// language=hbs
export default `
    <div class="{{styles.titleContainer}}">
        <h1 class="{{styles.title}}">{{title}}</h1>
        <form id="loginForm" class="{{styles.form}}">
            {{#each fields}}
                {{{this}}}
            {{/each}}
    </div>
    <div class="{{styles.buttonContainer}}">
        {{{Button}}}
        {{{Link}}}
    </div>
`;