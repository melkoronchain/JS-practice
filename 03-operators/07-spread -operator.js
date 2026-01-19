//Used to copy or merge objects and arrays.

const button = {
  color: 'red',
  width: 200
};

const newButton = {
  ...button,
  text: 'Buy'
};

console.log(newButton);

//Merge objects

const screen = { info: 'Buy' };
const updateScreen = { inch: 90 };

const infoScreen = {
  ...screen,
  ...updateScreen
};

console.log(infoScreen);