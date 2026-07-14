class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid = function(s) {
    // 1. Odd length check (still a great idea!)
    if (s.length % 2 !== 0) return false;

    let stack = [];
    
    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        // 2. If it's an opening bracket, add the expected closing bracket to the stack
        if (char === '(') stack.push(')');
        else if (char === '{') stack.push('}');
        else if (char === '[') stack.push(']');
        
        // 3. If it's a closing bracket...
        else {
            // Check the top of the stack. If it doesn't match, or the stack is empty, it's invalid!
            if (stack.pop() !== char) {
                return false;
            }
        }
    }

    // 4. If the stack is empty at the end, everything matched!
    return stack.length === 0;
};
}
