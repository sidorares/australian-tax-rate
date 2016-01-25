var assert = require('assert');

var getTaxRate = require('..');

var tax = function(income) {
  return income*getTaxRate(income);
}

var EPSILON = 1e-10;

function fequal(a, b) {
  assert(Math.abs(a-b) < EPSILON);
}

describe('getTaxRate', function() {
  it('matches values from ATO description', function() {
    // 0 - 18200 => 0
    fequal(getTaxRate(0), 0);
    fequal(getTaxRate(10000), 0);
    fequal(getTaxRate(18200), 0);
    // $18,201 – $37,000 = 19c for each $1 over $18,200
    fequal(tax(18210), 1.9);
    fequal(tax(19200), 190);
    // $37,001 – $80,000
    // $3,572 plus 32.5c for each $1 over $37,000
    fequal(tax(37100), 3572 + 32.5);
    // $80,001 – $180,000
    // $17,547 plus 37c for each $1 over $80,000
    fequal(tax(80100), 17547 + 37);
    // $180,001 and over
    // $54,547 plus 45c for each $1 over $180,000
    fequal(tax(180100), 54547 + 45);
    fequal(tax(280000), 54547 + 45000);
  });
});
