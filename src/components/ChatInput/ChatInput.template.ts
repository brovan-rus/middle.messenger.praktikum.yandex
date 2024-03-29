// language=hbs
export default `
    <input
            name="{{name}}"
            value="{{value}}"
            class="
                    {{styles.input}}
                {{#if searchBar}}
                    {{styles.searchBar}}
                {{else}}
                    {{styles.messageInput}}
                {{/if}}"
        {{#unless searchBar}}
            placeholder="{{placeholder}}"
        {{/unless}}
    />
    {{#if validationError}}
        <span class="{{styles.validationError}}">{{validationError}}</span>
    {{/if}}

    {{#if searchBar}}
        <div class="{{styles.placeholderContainer}}">
            <div class="{{styles.placeholderIcon}}"></div>
            <span class="{{styles.placeholderText}}">{{placeholder}}</span>
        </div>
    {{/if}}
`;
