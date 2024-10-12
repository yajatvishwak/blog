export const load = ({ params }) => {
  const blog = {
    blogId: params.blogId,
    blogTitle: "well well well",
    words: 34,
    tags: ["leetcode"],
    date: Date.now(),
  };
  return blog;
};
