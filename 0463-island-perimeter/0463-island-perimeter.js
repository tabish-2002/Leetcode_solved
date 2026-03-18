/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
        const rows = grid.length, cols = grid[0].length;
    let perimeter = 0;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 1) {
                for (const [dr, dc] of [[-1,0],[1,0],[0,-1],[0,1]]) {
                    const nr = r + dr, nc = c + dc;
                    if (nr < 0 || nr >= rows || nc < 0 || nc >= cols || grid[nr][nc] === 0) {
                        perimeter++;
                    }
                }
            }
        }
    }

    return perimeter;  
};