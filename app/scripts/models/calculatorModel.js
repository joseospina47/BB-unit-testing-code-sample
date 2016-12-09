calculator.models.CalculatorModel = (function () {

  /**
   * Calculates the addition of two numbers.
   * @param  {Integer} firstNumber  First Number
   * @param  {Integer} secondNumber Second Number
   * @return {Integer}              Operation Result
   */
  var add = function(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
  };

  /**
   * Calculates the substraction of two numbers.
   * @param  {Integer} firstNumber  First Number
   * @param  {Integer} secondNumber Second Number
   * @return {Integer}              Operation Result
   */
  var substract = function(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
  };

  /**
   * Calculates the multiplication of two numbers.
   * @param  {Integer} firstNumber  First Number
   * @param  {Integer} secondNumber Second Number
   * @return {Integer}              Operation Result
   */
  var multiply = function(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
  };

  /**
   * Calculates the division of two numbers.
   * @param  {Integer} firstNumber  First Number
   * @param  {Integer} secondNumber Second Number
   * @return {Integer}              Operation Result
   */
  var divide = function(firstNumber, secondNumber) {
    if(secondNumber === 0) {
      throw 'Second number cannot be 0';
    } else {
      return firstNumber / secondNumber;
    }
  };

  return {
    add       : add,
    substract : substract,
    multiply  : multiply,
    divide    : divide
  };

}());
