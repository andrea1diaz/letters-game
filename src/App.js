import React, { Component } from 'react';

import Board from './components/Board';
import WordInput from './components/WordInput';
import ResetButton from './components/ResetButton';

import './App.css';
import dictionary from './assets/dictionary.json';
import test_board from './assets/test-board-2.json';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            board: [],
            valid: undefined,
            selected: undefined,
            word: '',

            width: 0,
            height: 0
        }
    }


    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);

        this.setState({
            //board: this.generateBoard(16)

            //generate board from file
            board: test_board.board 
        });
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
    
    updateWindowDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }    

    generateBoard = (size) => {
        let board = [];
        var characters = 'AABCDEEFGHIIJKLMNOOPQRSTUUVWXYZ';
        var charactersLength = characters.length;

        for (var i = 0; i < size; i++) {
            board.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
        }
        
        return board;
    }

    selectTile = (index) => {
        const { word, board } = this.state;
        const new_word = word.concat(board[index]);

        this.setState({
            word: new_word,
            valid: dictionary.words.includes(new_word.toLowerCase()),
            selected: index
        });
    }

    wordReset = () => {
        this.setState({
            word: '',
            valid: undefined,
            selected: undefined
        })
    }

    render () {
        const { board, selected, word, valid, width } = this.state;

        return (
            <div className="global-container">
                <div className="inner-container">
                    {width <= 768 && (
                        <div className="sz-3">
                            <ResetButton
                                handleReset={this.wordReset}
                            />
                        </div>
                    )}
                    <div className="item sz-1">
                        <Board
                            col={4}
                            data={board}
                            selected={selected}
                            valid={valid}
                            handleClick={this.selectTile}
                        />
                    </div>
                    <div className="item sz-2 container-2">
                        {width > 768 && (
                            <ResetButton
                                handleReset={this.wordReset}
                            />
                        )}

                        <WordInput
                            word={word}
                            valid={valid}
                        />
                    </div>
                </div>
                
            </div>
        );
    }
}

export default App;