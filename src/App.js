import React, { useState } from 'react';
import { Fehu, Uruz, Thurisaz, Ansuz, Raidho } from './imgs/index';
import './index.css';

function App() {
  const [runes] = useState([
    {
      src: Fehu,
      header: `Fehu`,
      text: `Possessions won or earned, earned income, luck. Abundance, financial strength in the present or near future. Sign of hope and plenty, success and happiness. Social success. Energy, foresight, fertility, creation/destruction (becoming)`,
    },
    {
      src: Uruz,
      header: `Uruz`,
      text: `Physical strength and speed, untamed potential. A time of great energy and health. Freedom, energy, action, courage, strength, tenacity, understanding, wisdom. Sudden or unexpected changes (usually for the better). 
    `,
    },
    {
      src: Thurisaz,
      header: `Thurisaz`,
      text: `Reactive force, directed force of destruction and defense, conflict. Instinctual will, regenerative catalyst. A tendency toward change. Catharsis, purging, cleansing fire. `,
    },
    {
      src: Ansuz,
      header: `Ansuz`,
      text: `A revealing message or insight, communication. Signals, inspiration, enthusiasm, speech, true vision, power of words and naming. Blessings, the taking of advice. Good health, harmony, truth, wisdom.
    `,
    },
    {
      src: Raidho,
      header: `Raidho`,
      text: ` Travel, both in physical terms and those of lifestyle direction. A journey, vacation, relocation, evolution, change of place or setting. Seeing a larger perspective. Seeing the right move for you to make and deciding upon it.`,
    },
  ]);

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
    <>
      <div className="header" />
      <div className="main">
        <div className="intro">
          <p>
            In Norse lore, the god, Odin, impaled his heart with his own spear
            and hung on the world tree, Yggdrasil, for nine days and nights all
            to perceive the meaning of the runes.
          </p>

          <p>
            Odin made his sacrifice because he knew that the runes conveyed deep
            meaning, and if he could understand their meaning he would gain
            profound wisdom and power.
          </p>

          <p>
            The three Rune reading is the most common reading and satisfactory
            for most situations. With a specific issue in mind, press the button
            to draw three random Runes. Reading from the right, the first Rune
            represents the Overview of the situation, the center rune identifies
            the Challenge at hand, and the last rune indicates the course of
            Action required.
          </p>

          <p>
            Of course, the meaning of each Rune and how it corresponds to the
            reading is up to your own interpretation- which is what makes this
            activity a great accompiant to a glass of bubbles or a Viking
            inspired Aquavit cocktail!
          </p>
        </div>

        <ul>
          {randomRunes &&
            randomRunes.map((rune, idx) => {
              return (
                <li>
                  <h4>
                    {(idx === 0 && 'overview') ||
                      (idx === 1 && 'challenge') ||
                      (idx === 2 && 'action')}
                  </h4>
                  <img src={rune.src} alt="rune" />
                  <h5>{rune.header}</h5>
                  <p>{rune.text}</p>
                </li>
              );
            })}
        </ul>
        <button type="button" onClick={generateRunes}>
          Click for Runes
        </button>
      </div>
    </>
  );
}

export default App;
