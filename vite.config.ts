import { kitql } from '@kitql/all-in';
import { sveltekit } from '@sveltejs/kit/vite';
import houdini from 'houdini/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [
    kitql({
      projectName: 'insight',
      prismaFileForEnums: './prisma/schema.prisma'
    }),
    houdini(),
    sveltekit()
  ],
  optimizeDeps: {
    exclude: ['bytemd']
  },
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}']
  }
});
