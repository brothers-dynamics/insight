/// <references types="houdini-svelte">

/** @type {import('houdini').ConfigFile} */
const config = {
  include: 'src/**/*.{svelte,gql,ts,js}',
  client: './src/houdini.ts',
  plugins: {
    'houdini-svelte': {}
  }
};

export default config;
