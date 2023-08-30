import type { RequestEvent } from '@sveltejs/kit';
import { createSchema, createYoga } from 'graphql-yoga';
import schema from './schema';

const yogaApp = createYoga<RequestEvent>({
  schema: createSchema({ ...schema }),
  // Needed to be defined explicitly because our endpoint lives at a different path other than `/graphql`
  graphqlEndpoint: '/graphql',

  // Needed to let Yoga use sveltekit's Response object
  fetchAPI: globalThis,
  context: {
    prisma: 'lol'
  }
});

export { yogaApp as GET, yogaApp as POST };
