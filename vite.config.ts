import ckeditor5 from '@ckeditor/vite-plugin-ckeditor5';
import { kitql } from '@kitql/all-in';
import { sveltekit } from '@sveltejs/kit/vite';
import houdini from 'houdini/vite';
import { createRequire } from 'node:module';
import { defineConfig } from 'vite';

const require = createRequire(import.meta.url);

export default defineConfig({
  plugins: [
    kitql({
      prismaFileForEnums: 'prisma/schema.prisma'
    }),
    houdini(),
    sveltekit(),
    ckeditor5({ theme: require.resolve('@ckeditor/ckeditor5-theme-lark') })
  ]
});
