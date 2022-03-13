# Letters Game
![Desktop View](resources/LettersGame.gif)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm start
```

## Mobile View
The game also supports mobile view

## The code
### Creating board 
The game can create random generated boards or load them from preset in files.

Just change the board creation in `src/App.js`
```
componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);

    this.setState({
        //board: this.generateBoard(16)

        //generate board from file
        board: test_board.board 
    });
}
```
When using random generated boards they will be a new one every time the page is reloaded.

### Random Generated Boards
When creating a new board, one can choose the size and the probability of the letters appering, more letters in the `characters` list, more probability to appear. In the base configuration the vowels are duplicated to ensure more appear. 
```
generateBoard = (size) => {
    let board = [];
    var characters = 'AABCDEEFGHIIJKLMNOOPQRSTUUVWXYZ';
    var charactersLength = characters.length;

    for (var i = 0; i < size; i++) {
        board.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
    }
    
    return board;
}
```

### Number of tiles per row
The custom board allows to set the number of tiles per row in the board, just change the columns number in the `Board` component.
```
<Board
    col={4} // number of tiles per row
    data={board}
    selected={selected}
    valid={valid}
    handleClick={this.selectTile}
/>
```

### Detecting neighbors 
For detecting tile neighbors and because the board is resizable, The program doesn't use a double loop approach to search them. A `O(n^2)` won't be optimal if the board game is too big or if the game itself is too complex. 

To solve this problem in a more optimal way, the code transforms the index value of the tile to 2D coordinates and just checks if its in range to the last selected tile. This way the search for neighbors is achive in `O(1)`.

```
const isNeighbor = (index) => {
    if (props.selected === undefined) return true;

    var from_x = Math.floor(props.selected / props.col);
    var from_y = props.selected % props.col;
    var to_x = Math.floor(index/ props.col);
    var to_y = index % props.col;

    if ((from_x - 1 <= to_x && to_x <= from_x + 1) && (from_y - 1 <= to_y && to_y <= from_y + 1)) {
        return true;
    }

    return false;
}
```