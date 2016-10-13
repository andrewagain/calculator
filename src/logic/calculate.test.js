import calculate from './calculate';
import { expect } from 'chai';

function pressButtons(buttons) {
  const value = {};
  buttons.forEach((button) => {
    Object.assign(value, calculate(value, button));
  });
  // no need to distinguish between null and undefined values
  Object.keys(value).forEach((key) => {
    if (value[key] === null) {
      delete value[key];
    }
  });
  return value;
}

function expectButtons(buttons, expectation) {
  expect(pressButtons(buttons)).to.deep.equal(expectation);
}

it('should support 6', () => {
  expectButtons(['6'], { next: '6' });
});

it('should support 66', () => {
  expectButtons(['6', '6'], { next: '66' });
});

it('should support 6 + 6', () => {
  expectButtons(['6', '+', '6'], {
    next: '6',
    total: '6',
    operation: '+',
  });
});

it('should support 6 + 6 =', () => {
  expectButtons(['6', '+', '6', '='], {
    total: '12',
  });
});

it('should support 00 + 0 =', () => {
  expectButtons(['0', '0', '+', '0', '='], {
    total: '0',
  });
});

it('should support 6 + 6 = 9', () => {
  expectButtons(['6', '+', '6', '=', '9'], {
    next: '9',
  });
});

it('should support 3 + 6 = +', () => {
  expectButtons(['3', '+', '6', '=', '+'], {
    total: '9',
    operation: '+',
  });
});

it('should support 3 + 6 = + 9', () => {
  expectButtons(['3', '+', '6', '=', '+', '9'], {
    total: '9',
    operation: '+',
    next: '9',
  });
});

it('should support 3 + 6 = + 9 =', () => {
  expectButtons(['3', '+', '6', '=', '+', '9', '='], {
    total: '18',
  });
});

it('should support 3 + = 3 =', () => {
  // When '=' is pressed and there is not enough information to complete
  // an operation, the '=' should be disregarded.
  expectButtons(['3', '+', '=', '3', '='], {
    total: '6',
  });
});
