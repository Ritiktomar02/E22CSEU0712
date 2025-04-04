let windowArr = [];

function updateWindow(numbers) {
  for (let num of numbers) {
    if (!windowArr.includes(num)) {
      if (windowArr.length >= 10) {
        windowArr.shift(); // remove oldest
      }
      windowArr.push(num);
    }
  }
  return [...windowArr];
}

function getWindow() {
  return [...windowArr];
}

module.exports = { updateWindow, getWindow };
