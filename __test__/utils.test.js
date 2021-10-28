const { getFirst, randomPhoto } = require("./utils");
const photos = require("../photos");

describe("utils function tests", () => {
  describe("testing work preview", () => {
    const inputArr = [
      {
        title: "lorem ipsum",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
    ];
    it("given an array with one object and the new desired length of 10, outputs array of blog objects with content length of 10", () => {
      expect(getFirst(inputArr, 10)).toEqual([
        {
          title: "lorem ipsum",
          content: "Lorem ipsu",
        },
      ]);
    });

    it("imput array should not be mutated", () => {
      getFirst(inputArr, 1);
      expect(inputArr).toEqual([
        {
          title: "lorem ipsum",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
      ]);
    });
    it("function outputs a new array", () => {
      expect(getFirst(inputArr)).not.toBe(inputArr);
    });
  });

  describe("testing random photo function", () => {
    it("if input item is an object then add a photo property and value", () => {
      inputObj = {
        title: "lorem ipsum",
        content: "Lorem ipsu",
      };
      expect(randomPhoto(inputObj, photos)).toHaveProperty("photo");
    });
    it("if input item is an array then each item in input array is given photo property and value", () => {
      const inputArray = [
        {
          title: "lorem ipsum",
          content: "Lorem ipsu",
        },
      ];
      randomPhoto(inputArray, photos);
      expect(inputArray[0]).toHaveProperty("photo");
    });
  });
});
