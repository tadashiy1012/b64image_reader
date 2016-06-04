const assert = require('power-assert');
const path = require('path');
const reader = require('../index.js');

describe('b64image_reader test', () => {
  it('Pattern of arguments expected A', () => {
    const result = reader(path.join(__dirname, 'test_image'), 'jpg');
    assert(Array.isArray(result));
    assert(result.length === 1);
    assert(typeof result[0] === 'string');
    assert(result[0].substring(0, result[0].indexOf(',')) === 'data:image/jpg;base64');
  });
  it('Pattern of arguments expected B', () => {
    const result = reader(path.join(__dirname, 'test_image'), 'png');
    assert(Array.isArray(result));
    assert(result.length === 1);
    assert(typeof result[0] === 'string');
    assert(result[0].substring(0, result[0].indexOf(',')) === 'data:image/png;base64');
  });
  it('Pattern of not as expected argument', () => {
    const result = reader(path.join(__dirname, 'test_image'));
    assert(result !== undefined);
    assert(Array.isArray(result));
    assert(result[0].substring(0, result[0].indexOf(',')) === 'data:image/jpg;base64');
  });
  it('Pattern of not as expected argument B', () => {
    try {
      reader();
    } catch (err) {
      assert(err !== undefined);
    }
  });
});