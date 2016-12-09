calculator.controllers.CalculatorController = (function () {

  var _calculatorModel = calculator.models.CalculatorModel;

  /**
   * Calls the CalculatorModel to calculate the addition
   */
  var _add = function() {
    var firstNumber   = Number($('#firstNumber').val()),
        secondNumber  = Number($('#secondNumber').val()),
        result        = _calculatorModel.add(firstNumber, secondNumber);

        _showResults(result);
  };

  /**
   * Calls the CalculatorModel to calculate the substraction
   */
  var _substract = function() {
    var firstNumber   = Number($('#firstNumber').val()),
        secondNumber  = Number($('#secondNumber').val()),
        result        = _calculatorModel.substract(firstNumber, secondNumber);

        _showResults(result);
  };

  /**
   * Calls the CalculatorModel to calculate the multiplication
   */
  var _multiply = function() {
    var firstNumber   = Number($('#firstNumber').val()),
        secondNumber  = Number($('#secondNumber').val()),
        result        = _calculatorModel.multiply(firstNumber, secondNumber);

        _showResults(result);
  };

  /**
   * Calls the CalculatorModel to calculate the division
   */
  var _divide = function() {
    var firstNumber   = Number($('#firstNumber').val()),
        secondNumber  = Number($('#secondNumber').val()),
        result        = _calculatorModel.divide(firstNumber, secondNumber);

        _showResults(result);
  };

  /**
   * Shows the results on the UI
   */
  var _showResults = function(result){
    $('#result').empty();
    $('#result').append(result);
  };

  /**
   * Clears all the fields and the result label
   */
  var _clear = function(){
    $('#firstNumber').val('');
    $('#secondNumber').val('');
    $('#result').empty();
  };

  /**
   * Binds all the UI actions with the controller
   */
  var _bindUIActions = function() {
    $('.add-button').on('click', _add);
    $('.substract-button').on('click', _substract);
    $('.multiply-button').on('click', _multiply);
    $('.divide-button').on('click', _divide);
    $('.clear-button').on('click', _clear);
  };

  /**
   * Initializes the controller
   */
  var _init = function() {
    _bindUIActions();
  };

  _init();

}());
