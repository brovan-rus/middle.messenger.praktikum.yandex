//language=hbs

export default `
    <div class="{{styles.container}}">
        <label for="{{name}}" class="{{styles.text}} {{styles.fieldName}}">{{fieldName}}</label>
        <input name={{name}} id={{name}} type="{{type}}" class="{{styles.text}} {{styles.input}}" placeholder="{{fieldValue}}">
    </div>
`