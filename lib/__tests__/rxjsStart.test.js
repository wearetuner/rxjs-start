const assert = require('assert');
const rxjsStart = require('../index.js');

describe('rxjsStart', () => {
  it('has a test', () => {
    assert(true, 'rxjsStart should have a test');
    expect(true).toBe(true);
  });

  describe('Promise', function () {
    it('reject', async () => {
      const result = await new Promise((resolve, reject) => {
        reject("error");
      }).catch(message => {
        if (message === "error") {
          return 0;
        } else {
          return 1;
        }
      });
      expect(result).toBe(0);
    });
  });
});
