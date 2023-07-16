// language=hbs
export default `
    <form id="searchForm" class="{{styles.searchForm}}">
        <input
                name="{{name}}"
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

        {{#if searchBar}}
            <div class="{{styles.placeholderContainer}}">
                <div class="{{styles.placeholderIcon}}"></div>
                <span class="{{styles.placeholderText}}">{{placeholder}}</span>
            </div>
        {{/if}}
    </form>`;
