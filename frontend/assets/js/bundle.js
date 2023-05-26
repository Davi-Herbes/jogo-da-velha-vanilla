/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.jogoDaVelha = void 0;
class JogoDaVelha {
    constructor() {
        this.body = document.querySelector("body");
        this.squares = Array.from(document.querySelectorAll(".square"));
        this.playerDisplayContainer = document.querySelector(".player-display-container");
        this.displayWinner = document.querySelector(".winner");
        this.resetButton = document.querySelector(".reset-button");
        this.gameIsOver = false;
        this.games = [
            ["0", "1", "2"],
            ["3", "4", "5"],
            ["6", "7", "8"],
            ["0", "4", "8"],
            ["2", "4", "6"],
            ["0", "3", "6"],
            ["1", "4", "7"],
            ["2", "5", "8"],
        ];
        this.xGame = [];
        this.oGame = [];
        this.currentGame = this.xGame;
        this.currentPlayer = "X";
        this.currentPlayerDiv = document.querySelector(".player-display");
    }
    start() {
        this.squaresClickCapture();
    }
    squaresClickCapture() {
        for (let i = 0; i < this.squares.length; i++) {
            this.squares[i].addEventListener("click", (e) => {
                if (this.gameIsOver)
                    return;
                const target = e.target;
                if (target.innerText !== "")
                    return;
                this.currentGame.push(`${i}`);
                this.checkWinner();
                target.innerText = this.currentPlayer;
                this.changeCurrentPlayer();
                if (this.xGame.length + this.oGame.length === 9) {
                    this.endGame(true);
                }
            });
        }
    }
    changeCurrentPlayer() {
        if (this.currentPlayer == "X") {
            this.currentGame = this.oGame;
            this.currentPlayer = "O";
        }
        else {
            this.currentGame = this.xGame;
            this.currentPlayer = "X";
        }
        this.currentPlayerDiv.innerText = this.currentPlayer;
    }
    checkWinner() {
        for (let i = 0; i < this.games.length; i++) {
            const game = this.games[i];
            if (game.every((val) => this.currentGame.includes(val))) {
                this.endGame();
                return;
            }
        }
    }
    reset() {
        document.addEventListener("submit", (e) => {
            e.preventDefault();
            this.xGame = [];
            this.oGame = [];
            if (this.currentPlayer === "O") {
                this.currentGame = this.oGame;
            }
            else {
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
    endGame(aTie) {
        this.body.style.backgroundColor = "rgba(0, 42, 46, 0.92)";
        this.playerDisplayContainer.classList.add("hide");
        this.displayWinner.classList.remove("hide");
        this.gameIsOver = true;
        this.resetButton.classList.remove("hide");
        if (!aTie)
            this.displayWinner.innerText = `O vencedor foi: ${this.currentPlayer}`;
        else
            this.displayWinner.innerText = "Ops! Parece que deu velha...";
        this.reset();
    }
}
exports.jogoDaVelha = new JogoDaVelha();


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const app_1 = __webpack_require__(/*! ./app */ "./src/app.ts");
app_1.jogoDaVelha.start();

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map