var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  // calculator.add() - add 1 to 4 and get 5
  it('it should add', function(){
    calculator.numberClick(1)
    calculator.operatorClick('+')
    calculator.numberClick(4)
    calculator.operatorClick('=')
    assert.equal(calculator.previousTotal, 5);
  })

// calculator.subtract() subtract 4 from 7 and get 3
  it('it should subtract', function(){
    calculator.numberClick(7)
    calculator.operatorClick('-')
    calculator.numberClick(4)
    calculator.operatorClick('=')
    assert.equal(calculator.previousTotal, 3);
  })

  // calculator.multiply() - multiply 3 by 5 and get 15
  it('it should multiply', function(){
    calculator.numberClick(3)
    calculator.operatorClick('*')
    calculator.numberClick(5)
    calculator.operatorClick('=')
    assert.equal(calculator.previousTotal, 15);
  })

// calculator.divide() - divide 21 by 7 and get 3
  it ('it should divide', function(){
    calculator.numberClick(21)
    calculator.operatorClick('/')
    calculator.numberClick(7)
    calculator.operatorClick('=')
    assert.equal(calculator.previousTotal, 3);
  })

// calculator.numberClick() - concatenate multiple number button clicks
  it('it should cancatenate multiple clicks', function (){
    calculator.numberClick(4)
    calculator.numberClick(2)
    calculator.numberClick(7)
    calculator.numberClick(8)
    calculator.operatorClick('=')
    assert.equal(calculator.previousTotal, 4278);
  })

// calculator.operatorClick() - chain multiple operations together
it('can chain multiple operations', function(){
  calculator.numberClick(5)
  calculator.operatorClick('+')
  calculator.numberClick(5)
  calculator.operatorClick('-')
  calculator.numberClick(2)
  calculator.operatorClick('=')
  assert.equal(calculator.previousTotal, 8);
})

// calculator.clearClick() - clear the running total without affecting the calculation
it('clear running total', function(){
  calculator.numberClick(5)
  calculator.operatorClick('+')
  calculator.numberClick(5)
  calculator.operatorClick('-')
  calculator.numberClick(2)
  calculator.operatorClick('=')
  calculator.clearClick()
  assert.equal(calculator.previousTotal, 8);
  assert.equal(calculator.runningTotal, 0);

})

});
