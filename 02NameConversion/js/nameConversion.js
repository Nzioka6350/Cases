const input = document.querySelector("#text");
const convert = document.querySelector("#convert-btn");
const camelCaseElement = document.querySelector("#camel-case");
const pascelCaseElement = document.querySelector("#pascal-case");
const snakeCaseElement = document.querySelector("#snake-case");
const screamingSnakeCaseElement = document.querySelector(
  "#screaming-snake-case"
);
const kebabCaseElement = document.querySelector("#kebab-case");
const screamingKebabCaseElement = document.querySelector(
  "#screaming-kebab-case"
);

const makeCamelCase = (text) => {
  const wordArray = text.split(" ");
  const array = wordArray.map((word, i) => {
    if (i === 0) {
      return (word = word.toLowerCase());
    } else {
      const firstLetter = word.slice(0, 1);
      const restLetter = word.slice(1);
      return firstLetter.toUpperCase() + restLetter;
    }
  });
  return array.join("");
};

const makePascelCase = (text) => {
  const wordArray = text.split(" ");
  const array = wordArray.map((word, i) => {
    const firstLetter = word.slice(0, 1);
    const restLetter = word.slice(1);
    return firstLetter.toUpperCase() + restLetter;
  });
  return array.join("");
};

const makeSnakeCase = (text) => {
  const wordArray = text.split(" ");
  return wordArray.join("_");
};

const makeScreamingSnakeCase = (text) => {
  const wordArray = text.toUpperCase().split(" ");
  return wordArray.join("_");
};

const makeKebabCase = (text) => {
  const wordArray = text.split(" ");
  return wordArray.join("-");
};

const makeScreamingKebabCase = (text) => {
  const wordArray = text.toUpperCase().split(" ");
  return wordArray.join("-");
};

input.addEventListener("input", (e) => {
  let text = e.target.value;

  //   Camel Case
  const camelCase = makeCamelCase(text);
  camelCaseElement.innerText = camelCase;

  //   Pascel Case
  const pascelCase = makePascelCase(text);
  pascelCaseElement.innerText = pascelCase;

  //   Snake Case
  const snakeCase = makeSnakeCase(text);
  snakeCaseElement.innerText = snakeCase;

  //  Screaming Snake Case
  const screamingSnakeCase = makeScreamingSnakeCase(text);
  screamingSnakeCaseElement.innerText = screamingSnakeCase;

  //   Kebab Case
  const kebabCase = makeKebabCase(text);
  kebabCaseElement.innerText = kebabCase;

  //   Screaming Kebab
  const screamingKebabCase = makeScreamingKebabCase(text);
  screamingKebabCaseElement.innerText = screamingKebabCase;
});
