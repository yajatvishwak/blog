export const load = async ({ params }) => {
  let md = await import(`../../../../blogs/${params.year}/${params.blogID}.md`);
  //console.log(md.metadata);
  return {
    md: md.default,
    metadata: md.metadata,
  };
};
