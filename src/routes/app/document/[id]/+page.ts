import { redirect } from '@sveltejs/kit';

export async function load(context) {
  const id = context.params.id;
  throw redirect(307, `/app/document/${id}/1`);
}
