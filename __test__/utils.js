const getFirst = function (blogArr, num) {
  const smallContentBlog = blogArr.map((blog) => {
    return {
      title: blog.title,
      content: blog.content.slice(0, num),
    };
  });
  return smallContentBlog;
};

module.exports = getFirst;
