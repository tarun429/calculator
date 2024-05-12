let expression = '';
let result = document.getElementById('result');

function insertValue(value) {
  expression += value;
  result.value = expression;
}

function insertOperator(operator) {
  expression += operator;
  result.value = expression;
}

function clearResult() {
  expression = '';
  result.value = '';
}

function deleteChar() {
  expression = expression.slice(0, -1);
  result.value = expression;
}

function compute(operator) {
  if (operator === '=') {
    try {
      result.value = eval(expression);
      expression = result.value;
    } catch (error) {
      result.value = 'Error';
      expression = '';
    }
  } else {
    insertOperator(operator);
  }
}