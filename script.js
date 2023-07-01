const rinauthk = {
  script: true,
  a: true,
  b: true,
  c: true,
  d: true,
  code_token: 123321,
  'D2': "",
  'k': {
    'Trap2808': true,
    'TrA': true
  },
  owner_script: {
    rina: false,
    freeScript: true
  }
}

const rand = () => {
  return Math.random().toString(36).substr(2);
};

const token = () => {
  return rand() + rand() + rand() + "-" + rand() + rand() + rand();
};

let tokenSave = token();
let apiKey = token();

console.log(tokenSave);

const tokenHistory = [];

setInterval(() => {
  tokenSave = token();
  apiKey = token();

  const tokenObject = {
    tokenSave,
    apiKey
  };

  tokenHistory.push(tokenObject);
}, 0);

let connects = 0

if (tokenSave == tokenSave) connects + 1

const usersDB = []

const usersObject = {
    connects
}

usersDB.push(usersObject)
