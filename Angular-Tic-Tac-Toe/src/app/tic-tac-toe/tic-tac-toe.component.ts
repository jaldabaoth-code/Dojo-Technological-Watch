import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-tic-tac-toe',
    templateUrl: './tic-tac-toe.component.html',
    styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent implements OnInit {
    grid: string [][][];
    message: string;
    isX: boolean;
    winner?: String;

    constructor() {
        this.grid = [[[''], [''], ['']], [[''],[''],['']], [[''],[''],['']]];
        this.message = "";
        this.isX = true;
    }

    ngOnInit(): void { }

    clickOnCell(cell: string[]) {
        if (this.winner) return;
        if (!(cell[0] === '')) {
            this.message = "This box is already filled!";
            return;
        }
        this.message = "";
        cell[0] = this.isX ? 'X' : 'O';
        this.isX = !this.isX;
        this.checkSomeoneWon();
    }

    private checkSomeoneWon() {
        // Check the lines
        for (let row of Array(3).keys()) {
            if (this.grid[row][0][0] !== '' && this.grid[row][0][0] === this.grid[row][1][0] && this.grid[row][0][0] === this.grid[row][2][0]) {
                this.winner = this.grid[row][0][0];
            }
        }
        // Check the cols
        for (let col of Array(3).keys()) {
            if (this.grid[0][col][0] !== '' && this.grid[0][col][0] === this.grid[1][col][0] && this.grid[0][col][0] === this.grid[2][col][0]) {
                this.winner = this.grid[0][col][0];
            }
        }
        // Check the diagonal (left->right)
        if (this.grid[1][1][0] !== '' && this.grid[0][0][0] === this.grid[1][1][0] && this.grid[0][0][0] === this.grid[2][2][0]) {
            this.winner = this.grid[1][1][0];
        }
        // Check the diagonal (right->left)
        if (this.grid[1][1][0] !== '' && this.grid[2][0][0] === this.grid[1][1][0] && this.grid[0][2][0] === this.grid[1][1][0]) {
            this.winner = this.grid[1][1][0];
        }
        this.addWinnerMessage();
    }

    private addWinnerMessage(){
        if (this.winner) this.message = 'Player ' + this.winner + ' has won';
    }
}
