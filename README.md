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