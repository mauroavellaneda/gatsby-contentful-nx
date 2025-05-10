import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: 'ef71qy2g',
  dataset: 'production',
  apiVersion: '2023-05-01',
  useCdn: true,
});
