// Anthony Perez

function add(number) {
    let result = '';
    for (let i = 1; i <= 10; i++) {
      result += `${i} + ${number} = ${i + number}<br>`;
    }
    document.getElementById('addition').innerHTML = result;
  }
  
  function subtract(number) {
    let result = '';
    let i = 1;
    while (i <= 10) {
      result += `${i} - ${number} = ${i - number}<br>`;
      i++;
    }
    document.getElementById('subtraction').innerHTML = result;
  }
  
  function multiply(number) {
    let result = '';
    let i = 1;
    while (i <= 10) {
      result += `${i} * ${number} = ${i * number}<br>`;
      i++;
    }
    document.getElementById('multiplication').innerHTML = result;
  }
  
  function divide(number) {
    let result = '';
    for (let i = 1; i <= 10; i++) {
      result += `${i} / ${number} = ${(i / number).toFixed(2)}<br>`;
    }
    document.getElementById('division').innerHTML = result;
  }
  
  function calculateAll() {
    const value = parseFloat(document.getElementById('number').value);
    if (!isNaN(value)) {
      add(value);
      subtract(value);
      multiply(value);
      divide(value);
    }
  }
  
  document.getElementById('calculate').addEventListener('click', calculateAll);
  
