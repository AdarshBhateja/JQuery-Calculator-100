$(document).ready(function() {
    var display = $("#display");
    var current = "";
    var operator = "";
    var operand1 = "";
    var operand2 = "";
  
    $(".num").click(function() {
      current += $(this).text();
      display.text(current);
    });
  
    $(".operator").click(function() {
      operator = $(this).text();
      operand1 = current;
      current = "";
    });
  
    $("#equal").click(function() {
      operand2 = current;
      current = "";
      switch (operator) {
        case "+":
          display.text(parseFloat(operand1) + parseFloat(operand2));
          break;
        case "-":
          display.text(parseFloat(operand1) - parseFloat(operand2));
          break;
        case "*":
          display.text(parseFloat(operand1) * parseFloat(operand2));
          break;
        case "/":
          display.text(parseFloat(operand1) / parseFloat(operand2));
          break;
      }
    });
  
    $("#clear").click(function() {
      display.text("");
      current = "";
      operator = "";
     
    })

})