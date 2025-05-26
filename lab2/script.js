function nightmode_switch_click() {
    document.body.classList.toggle('dark-theme');
    let btn = document.getElementById('nightmode_switch');
    if (btn.textContent === 'N') {
      btn.textContent = 'D';
    }
    else {
      btn.textContent = 'N';
    }
  }
  function factorial(n) {
    if (n < 0) return
    return n ? n * factorial(n - 1) : 1;
  }

  window.onload = function(){ 

  let a = ''
  let b = ''
  let expressionResult = ''
  let selectedOperation = null
  let prev_b = ''
  let prev_op = ''
  let prev_equal_flag = false;

  // окно вывода результата
  outputElement = document.getElementById("result")

  // список объектов кнопок циферблата (id которых начинается с btn_digit_)
  digitButtons = document.querySelectorAll('[id ^= "btn_digit_"]')

  function onDigitButtonClicked(digit) {
      if (outputElement.textContent.length > 65) return
      if (!selectedOperation) {
          if ((digit == '0' && a == '') || (digit == '000' && a == '')) {
            return
          }
          else if (a == '' && digit == '.') {
            a += '0.';
          }
          else if ((digit != '.') || (digit == '.' && !a.includes(digit))) { 
            a += digit
          }
          outputElement.innerHTML = a
      } else {
          if ((digit == '0' && b == '') || (digit == '000' && b == '')) {
            outputElement.innerHTML = 0
          }
          else if (b == '' && digit == '.') {
            b += '0.';
            outputElement.innerHTML = b
          }
          else if ((digit != '.') || (digit == '.' && !b.includes(digit))) { 
              b += digit
              outputElement.innerHTML = b
          }
      }
  }

  // устанавка колбек-функций на кнопки циферблата по событию нажатия
  digitButtons.forEach(button => {
      button.onclick = function() {
          const digitValue = button.innerHTML
          onDigitButtonClicked(digitValue)
          adjustFontSize()
      }
  });

  // установка колбек-функций для кнопок операций
  document.getElementById("btn_op_mult").onclick = function() { 
    if (a === '') return
    if (!selectedOperation){
      selectedOperation = 'x'
      prev_equal_flag = false;
    }
    else {
      if (prev_equal_flag) {
        b = prev_b;
        selectedOperation = prev_op;
      }
      switch(selectedOperation) { 
          case 'x':
              expressionResult = (+a) * (+b)
              break;
          case '+':
              expressionResult = (+a) + (+b)
              break;
          case '-':
              expressionResult = (+a) - (+b)
              break;
          case '/':
              expressionResult = (+a) / (+b)
              break;
      }
      a = expressionResult.toString()
      prev_b = b
      prev_op = selectedOperation
      b = ''
      selectedOperation = 'x'
      outputElement.innerHTML = a
      prev_equal_flag = false
      adjustFontSize()
    }
  }
  document.getElementById("btn_op_plus").onclick = function() { 
      if (a === '') return
      if (!selectedOperation){
      selectedOperation = '+'
      prev_equal_flag = false;
    }
    else {
      if (prev_equal_flag) {
        b = prev_b;
        selectedOperation = prev_op;
      }
      switch(selectedOperation) { 
          case 'x':
              expressionResult = (+a) * (+b)
              break;
          case '+':
              expressionResult = (+a) + (+b)
              break;
          case '-':
              expressionResult = (+a) - (+b)
              break;
          case '/':
              expressionResult = (+a) / (+b)
              break;
      }
      a = expressionResult.toString()
      prev_b = b
      prev_op = selectedOperation
      b = ''
      selectedOperation = '+'
      outputElement.innerHTML = a
      prev_equal_flag = false
      adjustFontSize()
    }
  }
  document.getElementById("btn_op_minus").onclick = function() { 
      if (a === '') return
      if (!selectedOperation){
      selectedOperation = '-'
      prev_equal_flag = false;
    }
    else {
      if (prev_equal_flag) {
        b = prev_b;
        selectedOperation = prev_op;
      }
      switch(selectedOperation) { 
          case 'x':
              expressionResult = (+a) * (+b)
              break;
          case '+':
              expressionResult = (+a) + (+b)
              break;
          case '-':
              expressionResult = (+a) - (+b)
              break;
          case '/':
              expressionResult = (+a) / (+b)
              break;
      }
      a = expressionResult.toString()
      prev_b = b
      prev_op = selectedOperation
      b = ''
      selectedOperation = '-'
      outputElement.innerHTML = a
      prev_equal_flag = false
      adjustFontSize()
    }
  }
  document.getElementById("btn_op_div").onclick = function() { 
      if (a === '') return
      if (!selectedOperation){
      selectedOperation = '/'
      prev_equal_flag = false;
    }
    else {
      if (prev_equal_flag) {
        b = prev_b;
        selectedOperation = prev_op;
      }
      switch(selectedOperation) { 
          case 'x':
              expressionResult = (+a) * (+b)
              break;
          case '+':
              expressionResult = (+a) + (+b)
              break;
          case '-':
              expressionResult = (+a) - (+b)
              break;
          case '/':
              expressionResult = (+a) / (+b)
              break;
      }
      a = expressionResult.toString()
      prev_b = b
      prev_op = selectedOperation
      b = ''
      selectedOperation = '/'
      outputElement.innerHTML = a
      prev_equal_flag = false
      adjustFontSize()
    }
  }
  document.getElementById("btn_op_sign").onclick = function() {
      if (a === '' || /^0(\.0+)?$/.test(a)) return
      if (!selectedOperation) {
        a = -a;
        outputElement.innerHTML = a;
        prev_equal_flag = false;
        adjustFontSize()
        return;
      }
      if (b === '' || /^0(\.0+)?$/.test(b))
        return;
      b = -b;
      outputElement.innerHTML = b;
      prev_equal_flag = false;
      adjustFontSize()
  }
  document.getElementById("btn_op_percent").onclick = function() {
    if (a === '' || /^0(\.0+)?$/.test(a)) return
      if (!selectedOperation) {
        a = String(Number(a) / 100);
        outputElement.innerHTML = a;
        prev_equal_flag = false;
        adjustFontSize()
        return;
      }
      if (b === '' || /^0(\.0+)?$/.test(b))
        return;
      b = String(Number(b) / 100);
      outputElement.innerHTML = b;
      prev_equal_flag = false;
      adjustFontSize()
  }

  // кнопка очищения
  document.getElementById("btn_op_clear").onclick = function() { 
      a = ''
      b = ''
      selectedOperation = ''
      expressionResult = ''
      outputElement.innerHTML = 0
      prev_equal_flag = false;
      prev_b = ''
      prev_op = ''
      adjustFontSize()
  }

  // кнопка расчёта результата
  document.getElementById("btn_op_equal").onclick = function() { 
      if (prev_equal_flag) {
        b = prev_b;
        selectedOperation = prev_op;
      }
      if (a === '' || b === '' || !selectedOperation)
          return
      switch(selectedOperation) { 
          case 'x':
              expressionResult = (+a) * (+b)
              break;
          case '+':
              expressionResult = (+a) + (+b)
              break;
          case '-':
              expressionResult = (+a) - (+b)
              break;
          case '/':
              expressionResult = (+a) / (+b)
              break;
      }
      
      a = expressionResult.toString()
      prev_b = b
      prev_op = selectedOperation
      b = ''
      selectedOperation = null

      outputElement.innerHTML = a
      prev_equal_flag = true;
      adjustFontSize()
  }
  document.getElementById("btn_op_backspace").onclick = function() {
    if (!selectedOperation) {
        a = a.slice(0, -1)
        if (a === '') {
          outputElement.innerHTML = 0
        } else
        outputElement.innerHTML = a
    } else {
        b = b.slice(0, -1);
        if (b === '') {
          outputElement.innerHTML = 0
        } else
        outputElement.innerHTML = b
    }
  };
  document.getElementById("btn_op_sqrt").onclick = function() {
    if (a === '' || /^0(\.0+)?$/.test(a)) return
      if (!selectedOperation) {
        a = String(Math.sqrt(Number(a)))
        outputElement.innerHTML = a
        prev_equal_flag = false
        adjustFontSize()
        return
      }
      if (b === '' || /^0(\.0+)?$/.test(b))
        return
      b = String(Math.sqrt(Number(b)))
      outputElement.innerHTML = b
      prev_equal_flag = false
      adjustFontSize()
  }
  document.getElementById("btn_op_square").onclick = function() {
    if (a === '' || /^0(\.0+)?$/.test(a)) return
      if (!selectedOperation) {
        a = String(Number(a) * Number(a))
        outputElement.innerHTML = a
        prev_equal_flag = false
        adjustFontSize()
        return
      }
      if (b === '' || /^0(\.0+)?$/.test(b))
        return
      b = String(Number(b) * Number(b))
      outputElement.innerHTML = b
      prev_equal_flag = false
      adjustFontSize()
  }
  document.getElementById("btn_op_fact").onclick = function() {
    // if (a === '' || /^0(\.0+)?$/.test(a)) return
      if (!selectedOperation) {
        a = String(factorial(Number(a)))
        outputElement.innerHTML = a
        prev_equal_flag = false
        adjustFontSize()
        return
      }
      // if (b === '' || /^0(\.0+)?$/.test(b))
      //   return
      b = String(factorial(Number(b)))
      outputElement.innerHTML = b
      prev_equal_flag = false
      adjustFontSize()
  }
  document.getElementById("btn_op_ex").onclick = function() {
    // if (a === '' || /^0(\.0+)?$/.test(a)) return
      if (!selectedOperation) {
        a = String(Math.pow(Math.E, Number(a)))
        outputElement.innerHTML = a
        prev_equal_flag = false
        adjustFontSize()
        return
      }
      // if (b === '' || /^0(\.0+)?$/.test(b))
        // return
      b = String(Math.pow(Math.E, Number(b)))
      outputElement.innerHTML = b
      prev_equal_flag = false
      adjustFontSize()
  }

  function adjustFontSize() {
    const maxLength = 21;
    if (outputElement.textContent.length > maxLength) {
      outputElement.style.fontSize = `${24 - (outputElement.textContent.length - maxLength) * 0.7}px`
      if (Number(outputElement.style.fontSize.replace('px', '')) < 8){
        outputElement.style.fontSize = '8px'
      } 
    } 
    else {
        outputElement.style.fontSize = '24px';
    }
  }
  };
