import React, { useState } from 'react';
import { defaultRunes } from './defaultRunes';
import './index.css';

function App() {
  const [runes] = useState(defaultRunes);

  const [randomRunes, setRandomRunes] = useState([
    runes[0],
    runes[1],
    runes[2],
  ]);

  const generateRunes = () => {
    const updatedRandomRunes = [];
    while (updatedRandomRunes.length < 3) {
      const randomRune = runes[Math.floor(Math.random() * runes.length)];
      if (!updatedRandomRunes.includes(randomRune))
        updatedRandomRunes.push(randomRune);
    }
    setRandomRunes(updatedRandomRunes);
  };
  return (
    <div className="main">
      <div className="intro">
        <p>
          In Norse lore, the god, Odin, impaled his heart with his own spear and
          hung on the world tree, Yggdrasil, for nine days and nights all to
          perceive the meaning of the runes. Odin made his sacrifice because he
          knew that the runes conveyed deep meaning, and if he could understand
          their meaning he would gain profound wisdom and power.
        </p>
        <h3>Instructions</h3>
        <p>
          With a specific issue in mind, press the button to draw three random
          Runes. Reading from the left, the first Rune represents the Overview
          of the situation, the center rune identifies the Challenge at hand,
          and the last rune indicates the course of Action required.
        </p>
      </div>

      <div className="reading">
        <button type="button" onClick={generateRunes}>
          Click for a Reading
        </button>
      </div>

      <ul>
        {randomRunes &&
          randomRunes.map((rune, idx) => {
            return (
              <li key={rune}>
                <h5>
                  {(idx === 0 && 'overview') ||
                    (idx === 1 && 'challenge') ||
                    (idx === 2 && 'action')}
                </h5>
                <img src={rune.src} alt="rune" />
                <h4>{rune.header}</h4>
                <p>{rune.text}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default App;
