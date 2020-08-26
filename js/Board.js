class Board {
    constructor() {
        this.rows = 6;
        this.columns = 7;
        this.spaces = this.createSpaces();
    }

    /** 
     * Generates 2D array of spaces. 
     * @return  {Array}     An array of space objects
    */
    createSpaces() {
        const spaces = [];
        // // For each row
        // for (let row = 0; row < this.rows; row++) {
        //     // For each column
        //     for (let col = 0; col < this.columns; col++) {
        //         // constructor(x, y) {
        //         //     this.x = x;
        //         //     this.y = y;
        //         //     this.id = `space-${x}-${y}`;
        //         //     this.token = null;
        //         const space = new Space(col, row);
        //         spaces.push(space);
        //     }
        // }
        // return spaces;
        
        // Columns
        for (let x = 0; x < this.columns; x++) {
            const column = [];
            // Rows
            for (let y = 0; y < this.rows; y++) {
                const space = new Space(x, y);
                column.push(space);
            }
            spaces.push(column);
        }
        return spaces;
    }
    
    drawHTMLBoard() {
        for (let column of this.spaces) {
            for (let space of column) {
                space.drawSVGSpace();
            }
        }
    }
}