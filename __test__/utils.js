const getFirst = function (blogArr, num) {
  const smallContentBlog = blogArr.map((blog) => {
    return {
      title: blog.title,
      content: blog.content.slice(0, num),
    };
  });
  return smallContentBlog;
};

const randomPhoto = function (blogArr, photoArr) {
  blogArr.forEach(
    (blog) =>
      (blog.photo = photoArr[Math.floor(Math.random() * (blogArr.length - 1))])
  );
  return blogArr;
};

module.exports = { getFirst, randomPhoto };
