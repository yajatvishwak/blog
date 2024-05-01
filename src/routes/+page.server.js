import moment from "moment/moment.js";
import readingTime from "reading-time/lib/reading-time";

const compareDates = (a, b) => {
  const dateA = moment(a.date, "DD/MM/YYYY");
  const dateB = moment(b.date, "DD/MM/YYYY");
  return dateB - dateA;
};

async function getBlogs() {
  const blogs = [];
  const blogModules = import.meta.glob("../blogs/**/*.md");

  for (const modulePath in blogModules) {
    const blog = await blogModules[modulePath]();
    blog.metadata.year = moment(blog.metadata.date, "DD/MM/YYYY").year();

    blog.metadata.readingtime = readingTime(blog.default.render().html).text;
    blogs.push(blog.metadata);
  }

  blogs.sort(compareDates);
  //console.log(blogs);
  return blogs;
}

export const load = async ({ params }) => {
  const blogs = await getBlogs();
  return {
    blogs,
  };
};
