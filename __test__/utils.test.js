const getFirst = require("./utils");

describe("testing word preview", () => {
  it("given an array with one object and the new desired length of 10, outputs array of blog objects with content length of 10", () => {
    const inputArr = [
      {
        title: "lorem ipsum",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
    ];
    expect(getFirst(inputArr, 10)).toEqual([
      {
        title: "lorem ipsum",
        content: "Lorem ipsu",
      },
    ]);
  });

  it("imput array should not be mutated", () => {
    const inputArr = [
      {
        title: "lorem ipsum",
        content: "Lorem ipsum",
      },
    ];

    getFirst(inputArr, 1);

    expect(inputArr).toEqual([
      {
        title: "lorem ipsum",
        content: "Lorem ipsum",
      },
    ]);
  });
});
