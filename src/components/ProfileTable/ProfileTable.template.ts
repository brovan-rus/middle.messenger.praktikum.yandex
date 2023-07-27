// language=hbs
export default `
    <div class="{{styles.table}}">
        <div class="{{styles.avatar}}"></div>
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
