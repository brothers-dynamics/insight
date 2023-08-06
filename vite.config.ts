import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { copy } from 'vite-plugin-copy';

export default defineConfig({
  plugins: [
    sveltekit(),
    copy({
      targets: [{ src: '/node_modules/tinymce/**/*', dest: 'static/tinymce' }],
      verbose: true // Enable verbose for more detailed log
    })
  ],
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}']
  }
});
