import Handlebars from 'handlebars';

export default function handlebars() {
    const fileRegexp = /\.hbs$|\.handlebars$/;

    return {
        name: `vite_plugin_handlebars_precompile`,
        transform(src, id) {
            if (!fileRegexp.test(id)) {
                return
            }
            //language=javascript
            const code = `
                import Handlebars from 'handlebars/runtime';

                export default Handlebars.template(${Handlebars.precompile(src)});
            `

            return {
                code
            }
        }
    }
}