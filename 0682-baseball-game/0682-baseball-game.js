/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let stack = [];

    for (let i of operations) {
        if (i === "+") {
            stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
        } else if (i === "D") {
            stack.push(2 * stack[stack.length - 1]);
        } else if (i === "C") {
            stack.pop();
        } else {
            stack.push(parseInt(i));
        }
    }

    return stack.reduce((a, b) => a + b, 0);
};
