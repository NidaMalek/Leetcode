/**
 * @param {Function} fn
 * @return {Function}
 */
let count = 0;
let once = function (fn) {
    let isCalled = false;
    let val;

    return function (...args) {
        if (!isCalled) {
            val = fn(...args);
            isCalled = true;
            return val;
        }
        else {
            return undefined;
        }
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
