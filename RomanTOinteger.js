const roman = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const roman2int = (data) => {
  let value = 0;
  for (let i = 0; i < data.length; i++) {
    roman[data[i]] < roman[data[i + 1]]
      ? (value -= roman[data[i]])
      : (value += roman[data[i]]);
  }

  return value;
};

console.log(roman2int("III"));
