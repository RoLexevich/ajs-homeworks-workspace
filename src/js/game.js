import Character from "./domain";
class Game {
    start() {
        console.log("game startedt");
    }
}

class GameSavingData {}

function readGameSaving() {}

function writeGameSaving() {}

export default Game;
export { GameSavingData, readGameSaving, writeGameSaving };
