const { getFirst, randomPhoto } = require("./utils");

describe("utils function tests", () => {
  describe("testing work preview", () => {
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
    it("function outputs a new array", () => {
      const inputArr = [
        {
          title: "lorem ipsum",
          content: "Lorem ipsum",
        },
      ];
      expect(getFirst(inputArr)).not.toBe(inputArr);
    });
  });
  describe("testing random photo function", () => {
    it("outputs random number depending on the ", () => {});
  });
});
