import {NumbersValidator} from '../../app/numbers_validator.js';
import {expect} from 'chai';

describe('isNumberEven test', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });
  afterEach(() => {
    validator = null;
  });

  it('should return true when provided with an even number', () => {
    const validationResults = validator.isNumberEven(4);
    expect(validationResults).to.be.equal(true);
  });

  it('should return false when provided with an odd number', () => {
    const validationResults = validator.isNumberEven(5);
    expect(validationResults).to.be.equal(false);
  });

  it('should throw an error when provided a string', () => {
    expect(() => {
      validator.isNumberEven('4');
    }).to.throw('[4] is not of type "Number" it is of type "string"');
  });

  it('should return an array of even numbers', () => {
    const arrayOfNumbers = [5, 2, 6, 11, 22];
    const evenNumbersArray = validator.getEvenNumbersFromArray(arrayOfNumbers);
    expect(evenNumbersArray).to.be.eql([2, 6, 22]);
  });

  it('should return an error if array is not full of numbers', () => {
    const arraOfValues = [5, '2', 11, 22];
    expect(() =>
      validator.getEvenNumbersFromArray(arraOfValues),
    ).to.throw('[5,2,11,22] is not an array of "Numbers"');
  });

  it('should return an error if passed value is not integer', () => {
    expect(() =>
      validator.isInteger('4'),
    ).to.throw('[4] is not a number');
  });

  it('should return truen if passed value is an integer', () => {
    const validationResults = validator.isInteger(3);
    expect(validationResults).to.be.equal(true);
  });

  it('should return an error if array is not full of numbers', () => {
    const arraOfValues = [1, 2, '3'];
    expect(validator.isAllNumbers(arraOfValues)).to.be.equal(false);
  });

  it('should return an error if array is not full of numbers', () => {
    expect(() => validator.isAllNumbers('3')).to.throw(`[3] is not an array`);
  });
});
