import ckeditor5 from '@ckeditor/vite-plugin-ckeditor5';
import { sveltekit } from '@sveltejs/kit/vite';
import houdini from 'houdini/vite';
import { createRequire } from 'node:module';
import { defineConfig } from 'vite';

const require = createRequire(import.meta.url);

export default defineConfig({
  plugins: [
    houdini(),
    sveltekit(),
    ckeditor5({ theme: require.resolve('@ckeditor/ckeditor5-theme-lark') })
  ]
});
