class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let numSet = new Set();
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                let curr = board[i][j];
                if(curr === '.') continue

                const rowStr = `row ${i} has ${curr}`;
                const colStr = `col ${j} has ${curr}`;
                const boxStr = `box ${Math.floor(i / 3)}-${Math.floor(j / 3)} has ${curr}`;

                if (numSet.has(rowStr) || numSet.has(colStr) || numSet.has(boxStr)) return false;
                numSet.add(rowStr).add(colStr).add(boxStr);
            }
        }
        return true;
    }
}
