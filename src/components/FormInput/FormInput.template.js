//language=hbs

export default `
    <div class="{{styles.container}} {{#if userForm}} {{styles.containerUserFrom}} {{/if}}">
        <label 
                for="{{name}}" 
                class="{{styles.text}} {{styles.fieldName}} {{#if userForm}} {{styles.labelUserForm}} {{/if}}"
        >
            {{fieldName}}
        </label>
        <input 
                name={{name}} 
                id={{name}} 
                type="{{type}}" 
                class="{{styles.text}} {{styles.input}} {{#if userForm}} {{styles.inputUserForm}} {{/if}}" 
                placeholder="{{fieldValue}}"
        >
    </div>
`