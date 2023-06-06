import {defineConfig} from "vite";
import { resolve } from 'path'
import handlebars from './src/utils/handlebars_precompile_plugin.js';

export default defineConfig({
    root: resolve(__dirname, 'src'),
    build: {
        exitDir: resolve(__dirname, 'dist'),
    },
});