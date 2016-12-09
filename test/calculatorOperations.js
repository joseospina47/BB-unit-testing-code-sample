var calculatorModel = calculator.models.CalculatorModel;

/**
 * Addition tests
 */
 QUnit.test('Addition: 3 + 2', function(assert){
   var results          = calculatorModel.add(3, 2),
       comparedResults  = 5;
   assert.deepEqual(
     results,
     comparedResults,
     '3 + 2 Equals 5'
   );
 });

 QUnit.test('Addition: -2 + -3', function(assert){
   var results          = calculatorModel.add(-2, -3),
       comparedResults  = -5;
   assert.deepEqual(
     results,
     comparedResults,
     '-2 + -3 Equals -5'
   );
 });

 QUnit.test('Addition: -5 + 2', function(assert){
   var results          = calculatorModel.add(-5, 2),
       comparedResults  = -3;
   assert.deepEqual(
     results,
     comparedResults,
     '-5 + 2 Equals -3'
   );
 });

 QUnit.test('Addition: 2 + -5', function(assert){
   var results          = calculatorModel.add(2, -5),
       comparedResults  = -3;
   assert.deepEqual(
     results,
     comparedResults,
     '2 + -5 Equals -3'
   );
 });

 QUnit.test('Addition: 5 + -3', function(assert){
   var results          = calculatorModel.add(5, -3),
       comparedResults  = 2;
   assert.deepEqual(
     results,
     comparedResults,
     '5 + -3 Equals 2'
   );
 });

 QUnit.test('Addition: -3 + 5', function(assert){
   var results          = calculatorModel.add(-3, 5),
       comparedResults  = 2;
   assert.deepEqual(
     results,
     comparedResults,
     '-3 + 5 Equals 2'
   );
 });

  /**
   * Substraction tests
   */
   QUnit.test('Substraction: 3 - 2', function(assert){
     var results          = calculatorModel.substract(3, 2),
         comparedResults  = 1;
     assert.deepEqual(
       results,
       comparedResults,
       '3 - 2 Equals 1'
     );
   });

   QUnit.test('Substraction: -2 - -3', function(assert){
     var results          = calculatorModel.substract(-2, -3),
         comparedResults  = 1;
     assert.deepEqual(
       results,
       comparedResults,
       '-2 - -3 Equals 1'
     );
   });

   QUnit.test('Substraction: -5 - 2', function(assert){
     var results          = calculatorModel.substract(-5, 2),
         comparedResults  = -7;
     assert.deepEqual(
       results,
       comparedResults,
       '-5 - 2 Equals -7'
     );
   });

   /**
    * Multiplication tests
    */
   QUnit.test('Multiplication: -2 * 3', function(assert){
     var results          = calculatorModel.multiply(-2, 3),
         comparedResults  = -6;
     assert.deepEqual(
       results,
       comparedResults,
       '-2 * 3 Equals -6'
     );
   });

   QUnit.test('Multiplication: 4 * 1', function(assert){
     var results          = calculatorModel.multiply(4, 1),
         comparedResults  = 4;
     assert.deepEqual(
       results,
       comparedResults,
       '4 * 1 Equals 4'
     );
   });

   QUnit.test('Multiplication: 4 * 3', function(assert){
     var results          = calculatorModel.multiply(4, 3),
         comparedResults  = 12;
     assert.deepEqual(
       results,
       comparedResults,
       '4 * 3 Equals 12'
     );
   });

   QUnit.test('Multiplication: 10 * 10', function(assert){
     var results          = calculatorModel.multiply(10, 10),
         comparedResults  = 100;
     assert.deepEqual(
       results,
       comparedResults,
       '10 * 10 Equals 100'
     );
   });

   /**
    * Division tests
    */
    QUnit.test('Division: 10 / 2', function(assert){
      var results          = calculatorModel.divide(10, 2),
          comparedResults  = 5;
      assert.deepEqual(
        results,
        comparedResults,
        '10 / 2 Equals 5'
      );
    });

    QUnit.test('Division: 3 / 17', function(assert){
      var results          = calculatorModel.divide(3, 17),
          comparedResults  = 0.17647058823529413;
      assert.deepEqual(
        results,
        comparedResults,
        '3 / 17 Equals 0.17647058823529413'
      );
    });


    QUnit.test('Division: 33 / 0', function(assert){
      assert.throws(
        function(){
          calculatorModel.divide(33, 0);
        },
        'Throws an exception when the second number is 0'
      );
    });
