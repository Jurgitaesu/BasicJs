// Task 2
const printInt = (start, end) => {
  const arr = [];

  for (let i = start; i <= end; i++) {
    arr.push(i);
  }

  arr.map((number) => {
    number % 3 === 0 && number % 7 === 0 && console.log('OpenSource');
    number % 3 === 0 && console.log('Open');
    number % 7 === 0 && console.log('Source');
    console.log(number);
  });
};

printInt(1, 99);

// Task 3
const containerChildren = document.querySelectorAll('.container')[1].children;

//Print array of children
console.log(containerChildren);

//Print all children divs
Array.from(containerChildren).forEach((child) => {
  console.log(child);
});

//Task 4
const sum = (arr) => {
  let sum = 0;

  arr.map((item) => {
    if (item % 1 === 0) {
      sum += Number(item);
    }
    return sum;
  });

  console.log(sum);
};

sum(['1', 'a', '25', '13.1']);

//Task 5
const fetchObject = async (id) => {
  try {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const response = await fetch(url);
    const data = await response.json();
    const obj = data.find((x) => x.id === id);
    console.log(obj);
  } catch (err) {
    console.error(err);
  }
};

fetchObject(5);

//Task 6
const regEx = (str) => {
  const pattern = /(Softeq.*#rules)|(#rules.*Softeq)/;
  const result = pattern.test(str);
  console.log(result);
};

regEx('text_Softeq_#rules_more_text');

// Task 7
const printAlphabet = () => {
  const alphabet = String.fromCharCode(...Array(123).keys())
    .slice(97)
    .toUpperCase();
  const array = [...alphabet];
  console.log(array);
};

printAlphabet();

//Task 8
const secretInteger = Math.floor(Math.random() * 1000000) + 1;
let verifyCount = 0;

document.body.innerHTML += `<h2>Guessing game</h2>
<input type="number" min="1" max="1000000" />
<button>Guess number</button>`;

const verify = (e) => {
  let guess = Number(e.path[1].children[4].value);
  verifyCount += 1;

  if (verifyCount <= 50) {
    if (guess === secretInteger) {
      document.querySelector('button').innerText = 'You won!';
      document.querySelector('button').removeEventListener('click', verify);
      return console.log(0);
    }
    if (guess > secretInteger) {
      return console.log(-1);
    }
    if (guess < secretInteger) {
      return console.log(1);
    }
  } else {
    console.log('You have already tried 50 times. You loose!');
    document.querySelector('button').removeEventListener('click', (e) => verify(e));
  }
};

document.querySelector('button').addEventListener('click', verify);
