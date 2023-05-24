type Player = "X" | "O";

class JogoDaVelha {
    private body: HTMLBodyElement = document.querySelector("body") as HTMLBodyElement;

    private squares: HTMLDivElement[] = Array.from(
        document.querySelectorAll(".square")
    ) as HTMLDivElement[];

    private playerDisplayContainer: HTMLDivElement = document.querySelector(
        ".player-display-container"
    ) as HTMLDivElement;

    private displayWinner = document.querySelector(".winner") as HTMLDivElement;

    private resetButton = document.querySelector(".reset-button") as HTMLButtonElement;

    private gameIsOver = false;

    private games = [
        ["0", "1", "2"],
        ["3", "4", "5"],
        ["6", "7", "8"],
        ["0", "4", "8"],
        ["2", "4", "6"],
        ["0", "3", "6"],
        ["1", "4", "7"],
        ["2", "5", "8"],
    ];

    private xGame: string[] = [];
    private oGame: string[] = [];

    private currentGame: string[] = this.xGame;

    private currentPlayer: Player = "X";
    private currentPlayerDiv: HTMLDivElement = document.querySelector(
        ".player-display"
    ) as HTMLDivElement;

    start(): void {
        this.squaresClickCapture();
    }

    squaresClickCapture(): void {
        for (let i = 0; i < this.squares.length; i++) {
            this.squares[i].addEventListener("click", (e) => {
                if (this.gameIsOver) return;

                const target = e.target as HTMLDivElement;

                if (target.innerText !== "") return; // Se já tiver algo digitado no quadrado, não faz nada

                this.currentGame.push(`${i}`);
                console.log(this.currentGame);
                // console.log(i);

                this.checkWinner();

                target.innerText = this.currentPlayer;
                this.changeCurrentPlayer();

                console.log(this);
            });
        }
    }

    changeCurrentPlayer(): void {
        if (this.currentPlayer == "X") {
            this.currentGame = this.oGame;
            this.currentPlayer = "O";
        } else {
            this.currentGame = this.xGame;
            this.currentPlayer = "X";
        }

        this.currentPlayerDiv.innerText = this.currentPlayer;
    }

    checkWinner(): void {
        for (let i = 0; i < this.games.length; i++) {
            const game = this.games[i];

            if (game.every((val) => this.currentGame.includes(val))) {
                this.endGame();

                return;
            }
        }
    }

    reset(): void {
        document.addEventListener("submit", (e) => {
            e.preventDefault();

            this.xGame = [];
            this.oGame = [];

            if (this.currentPlayer === "O") {
                this.currentGame = this.oGame;
            } else {
                this.currentGame = this.xGame;
            }

            this.body.style.backgroundColor = "rgb(81, 81, 81)";
            this.gameIsOver = false;
            this.resetButton.classList.add("hide");

            this.playerDisplayContainer.classList.remove("hide");
            this.displayWinner.classList.add("hide");
            this.displayWinner.innerText = ``;

            for (let i = 0; i < this.squares.length; i++) {
                const square = this.squares[i];
                square.innerText = "";
            }
        });
    }

    endGame(): void {
        this.body.style.backgroundColor = "rgba(0, 42, 46, 0.92)";

        this.playerDisplayContainer.classList.add("hide");
        this.displayWinner.classList.remove("hide");
        this.displayWinner.innerText = `O vencedor foi: ${this.currentPlayer}`;
        this.gameIsOver = true;
        this.resetButton.classList.remove("hide");
        this.reset();
    }
}

export const jogoDaVelha = new JogoDaVelha();
