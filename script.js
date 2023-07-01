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

setInterval(() => {
  tokenSave = token();
  apiKey = token();
  console.log(tokenSave, apiKey);
}, 10000);
