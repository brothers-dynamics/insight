export const load = ({ params }) => {
  const { id, version } = params;
  return {
    id,
    version
  };
};
