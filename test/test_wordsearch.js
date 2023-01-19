const chai = require("chai");
const assert = chai.assert;

const wordSearch = require("../wordsearch.js");

const template = [
  ["A", "W", "C", "F", "Q", "U", "A", "L"],
  ["S", "E", "I", "N", "F", "E", "L", "D"],
  ["Y", "F", "C", "F", "Q", "U", "A", "L"],
  ["H", "M", "J", "T", "E", "V", "R", "G"],
  ["W", "H", "C", "S", "Y", "E", "R", "L"],
  ["B", "F", "R", "E", "N", "E", "Y", "B"],
  ["U", "B", "T", "W", "A", "P", "A", "I"],
  ["O", "D", "C", "A", "K", "U", "A", "S"],
  ["E", "Z", "K", "F", "Q", "U", "A", "L"],
];

describe("#wordSearch()", function () {
  it("should return false if the word is not present (horizontal)", function () {
    const result = wordSearch(template, "FRANK");

    assert.isFalse(result);
  });

  it("should return true if the word is present (horizontal)", function () {
    const result = wordSearch(template, "SEINFELD");

    assert.isTrue(result);
  });

  it("word is not case sensitive", function () {
    const result = wordSearch(template, "Seinfeld");

    assert.isTrue(result);
  });

  it("should return false if the word is not present (vertical)", function () {
    const result = wordSearch(template, "GEORGE");

    assert.isFalse(result);
  });

  it("should return true if the word is present (vertical)", function () {
    const result = wordSearch(template, "LARRY");

    assert.isTrue(result);
  });

  it("should return false if the word is not present (horizonal - backwards)", function () {
    const result = wordSearch(template, "ESTHER");

    assert.isFalse(result);
  });

  it("should return true if the word is present (horizontal - backward)", function () {
    const result = wordSearch(template, "YENER");

    assert.isTrue(result);
  });

  it("should return false if the word is not present (vertical - backwards)", function () {
    const result = wordSearch(template, "CODY");

    assert.isFalse(result);
  });

  it("should return true if the word is present (vertical - backward)", function () {
    const result = wordSearch(template, "WEST");

    assert.isTrue(result);
  });

  it("should return false if the word is not present (diagonal down)", function () {
    const result = wordSearch(template, "BOBBY");

    assert.isFalse(result);
  });

  it("should return true if the word is present (diagonal down)", function () {
    const result = wordSearch(template, "WIFE");

    assert.isTrue(result);
  });

  it("should return false if the word is not present (diagonal up)", function () {
    const result = wordSearch(template, "BILLY");

    assert.isFalse(result);
  });

  it("should return true if the word is present (diagonal up)", function () {
    const result = wordSearch(template, "SEUL");

    assert.isTrue(result);
  });

  it("should return false if the word is not present (diagonal down - backwards)", function () {
    const result = wordSearch(template, "BOBBY");

    assert.isFalse(result);
  });

  it("should return true if the word is present (diagonal down - backward)", function () {
    const result = wordSearch(template, "YEEF");

    assert.isTrue(result);
  });

  it("should return false if the word is not present (diagonal up - backwards)", function () {
    const result = wordSearch(template, "BILLY");

    assert.isFalse(result);
  });

  it("should return true if the word is present (diagonal up - backward)", function () {
    const result = wordSearch(template, "AVYET");

    assert.isTrue(result);
  });
});
