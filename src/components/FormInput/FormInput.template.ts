// language=hbs

export default `
    <label
            for="{{name}}"
            class="
                {{styles.text}}
                {{styles.fieldName}}
                {{#if userForm}} {{styles.labelUserForm}} {{/if}}"
    >
        {{fieldName}}
    </label>
    <input
            name={{name}}
            id={{name}}
            type="{{type}}"
            value="{{value}}"
            class="
                {{styles.text}}
                {{styles.input}} {{#if userForm}} {{styles.inputUserForm}} {{/if}}"
            placeholder="{{placeholder}}"
    >
    {{#if validationError}}
        <span class="
            {{styles.validationError}}
            {{#if userForm}}
                {{styles.validationErrorUserForm}}
            {{/if}}"
        >
            {{validationError}}
        </span>
    {{/if}}
`;
