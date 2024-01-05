/**
         * @param {number} n
         * @return {Function} counter
         */
var createCounter = function (n) {

    return function () {
        let newN = n;
        n++;
        return newN;
    };
};
const counter = createCounter(10);
console.log(counter());
console.log(counter());
console.log(counter());
/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */