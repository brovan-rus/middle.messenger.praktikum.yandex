// language=hbs
export default `
    <div class="{{styles.container}}">
        <div class="{{styles.table}}">
            <div class="{{styles.avatar}}"></div>
            <div class="{{styles.fields}}">
                {{#each fields}}
                    {{>profileField this}}
                {{/each}}
            </div>
            <div class="{{styles.links}}">
                {{#each links}}
                    {{>profileLink}}
                {{/each}}
            </div>
        </div>
      
    </div>
`