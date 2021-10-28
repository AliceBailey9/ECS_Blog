const getFirst = function (blogArr, num) {
  const smallContentBlog = blogArr.map((blog) => {
    return {
      title: blog.title,
      content: blog.content.slice(0, num),
    };
  });
  return smallContentBlog;
};

const randomPhoto = function (blogInfo, photoArr) {
  if (Array.isArray(blogInfo)) {
    blogInfo.forEach(
      (blog) =>
        (blog.photo =
          photoArr[Math.floor(Math.random() * (photoArr.length - 1))])
    );
    return blogInfo;
  } else {
    blogInfo.photo =
      photoArr[Math.floor(Math.random() * (photoArr.length - 1))];
    return blogInfo;
  }
};

module.exports = { getFirst, randomPhoto };
