const cal = require('./caculator');

describe('add operation', () => {
    test('adds 1 + 2 to equal 3', () => {
        let value = cal.add(1, 2);
        expect(value).toBe(3);
    });

    test('adds 5 + 5 to equal 10', () => {
        let value = cal.add(5, 5);
        expect(value).toBe(10);
    });

});


describe('subtract operation', () => {
    test('subtracts 5 - 5 to equal 0', () => {
        let value = cal.subtract(5, 5);
        expect(value).toBe(0);
    });

    test('subtracts 3 - 2 to equal 1', () => {
        let value = cal.subtract(3, 2);
        expect(value).toBe(1);
    });
});