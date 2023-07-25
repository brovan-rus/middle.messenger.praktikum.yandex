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
            class="
                    {{styles.text}}
                {{styles.input}} {{#if userForm}} {{styles.inputUserForm}} {{/if}}"
            placeholder="{{fieldValue}}"
    >
`;
