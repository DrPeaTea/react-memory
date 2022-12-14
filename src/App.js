import "./App.css";
import Card from "./component/card";
import { useState } from "react";

const cardImg = [
  { id: 0, src: "https://picsum.photos/id/0/200/300" },
  { id: 1, src: "https://picsum.photos/id/10/200/300" },
  { id: 2, src: "https://picsum.photos/id/20/200/300" },
  { id: 3, src: "https://picsum.photos/id/30/200/300" },
  { id: 4, src: "https://picsum.photos/id/40/200/300" },
  { id: 5, src: "https://picsum.photos/id/50/200/300" },
  { id: 6, src: "https://picsum.photos/id/60/200/300" },
  { id: 7, src: "https://picsum.photos/id/70/200/300" },
  { id: 8, src: "https://picsum.photos/id/80/200/300" },
  { id: 9, src: "https://picsum.photos/id/90/200/300" },
];
let cardSelected = [];
let score = 0;
function App() {
  const [game, setGame] = useState(0);
  let board = cardImg.map(function (imgNum) {
    return (
      <div className="App">
        <Card src={imgNum.src} id={imgNum.id} onDataUpdate={cardPicked} />
      </div>
    );
  });
  function cardPicked(data) {
    if (cardSelected.includes(data)) {
      alert("game over you got a score of " + score);
      cardSelected = [];
      score = 0;
    } else if (score === 10) {
      alert("you win, you managed to remember all 10 pictures");
      cardSelected = [];
      score = 0;
    } else {
      cardSelected.push(data);
      console.log(cardSelected);
      setGame(game + 1);
      score = score + 1;
    }
  }

  return board.sort(() => Math.random() - 0.5);
}

export default App;
