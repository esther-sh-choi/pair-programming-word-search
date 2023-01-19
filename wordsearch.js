const transpose = (matrix) => {
  let resultArray = [];

  for (let i = 0; i < matrix[0].length; i++) {
    resultArray.push([]);
  }

  for (const col in matrix) {
    for (const row in matrix[col]) {
      resultArray[row][col] = matrix[col][row];
    }
  }

  return resultArray;
};

const lookForWord = (array, word) => {
  for (const l of array) {
    if (l.includes(word)) return true;
  }
  return false;
};

const makeDiagonalDownArray = (letters, array) => {
  const word = [];
  const helper = (firstIndex, secondIndex) => {
    if (firstIndex === letters.length || secondIndex === letters[0].length) {
      return;
    }

    word.push(letters[firstIndex][secondIndex]);
    helper(firstIndex + 1, secondIndex + 1);
  };

  for (let i = 0; i < letters.length; i++) {
    helper(i, 0);
    array.push(word.join(""));
    word.splice(0);
  }

  for (let j = 1; j < letters[0].length; j++) {
    helper(0, j);
    array.push(word.join(""));
    word.splice(0);
  }
};

const makeDiagonalUpArray = (letters, array) => {
  const word = [];
  const helper = (firstIndex, secondIndex) => {
    if (firstIndex < 0 || secondIndex === letters[0].length) {
      return;
    }

    word.push(letters[firstIndex][secondIndex]);
    helper(firstIndex - 1, secondIndex + 1);
  };

  for (let i = letters.length - 1; i >= 0; i--) {
    helper(i, 0);
    array.push(word.join(""));
    word.splice(0);
  }

  for (let j = 1; j < letters[0].length; j++) {
    helper(8, j);
    array.push(word.join(""));
    word.splice(0);
  }
};

const wordSearch = (letters, word) => {
  const wordUpper = word.toUpperCase();
  const wordUpperReverse = wordUpper.split("").reverse().join("");

  const horizontalJoin = letters.map((ls) => ls.join(""));
  const transposedArray = transpose(letters);
  const verticalJoin = transposedArray.map((ls) => ls.join(""));

  let diagonalDownJoin = [];
  makeDiagonalDownArray(letters, diagonalDownJoin);
  let diagonalUpJoin = [];
  makeDiagonalUpArray(letters, diagonalUpJoin);

  if (
    lookForWord(horizontalJoin, wordUpper) ||
    lookForWord(verticalJoin, wordUpper) ||
    lookForWord(horizontalJoin, wordUpperReverse) ||
    lookForWord(verticalJoin, wordUpperReverse) ||
    lookForWord(diagonalUpJoin, wordUpper) ||
    lookForWord(diagonalDownJoin, wordUpper) ||
    lookForWord(diagonalUpJoin, wordUpperReverse) ||
    lookForWord(diagonalDownJoin, wordUpperReverse)
  ) {
    return true;
  }
  return false;
};

module.exports = wordSearch;
