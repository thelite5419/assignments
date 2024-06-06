function clearDisplay() {
  console.log("err")
  document.getElementById('result').value = ``;
}

function append(character) {
  const result = document.getElementById('result');
  result.value += character;
}

function remOneChar() {
  const result = document.getElementById('result');
  result.value = result.value.slice(0, -1);
}

function showResult() {
  const result = document.getElementById('result');
  try {
      result.value = eval(result.value);
  } catch (error) {
      result.value = 'Error';
  }
}
