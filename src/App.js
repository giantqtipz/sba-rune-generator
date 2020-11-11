import React, { useState, useRef, useEffect } from 'react';
import { defaultRunes } from './defaultRunes';
import { v4 as uuid } from 'uuid';
import './index.css';

function App() {
  const [runes] = useState(defaultRunes);
  const [show, setShow] = useState(false);
  const [randomRunes, setRandomRunes] = useState([]);
  const runesListRef = useRef(null);

  const generateRunes = () => {
    const updatedRandomRunes = [];
    if(show === false) setShow(true);
    show && runesListRef.current.scrollIntoView({ behavior: "smooth" });
    while (updatedRandomRunes.length < 3) {
      const randomRune = runes[Math.floor(Math.random() * runes.length)];;
      if (!updatedRandomRunes.includes(randomRune))
      updatedRandomRunes.push(randomRune);
    };
    setRandomRunes(updatedRandomRunes);
    hideRunes(updatedRandomRunes);
  };
  
  const hideRunes = (randomRunes) => {
    const runes = document.querySelectorAll('li');
    let timeout = 0;
    runes.forEach((rune, idx) => {
      timeout = timeout + 150;
      setTimeout(() => {
        rune.classList.remove('show');
        if(idx === randomRunes.length - 1) {
          setTimeout(() => {
            setRandomRunes(randomRunes);
            showRunes(rune);
          }, 500);
        }
      }, timeout);
    })
  }

  const showRunes = (rune) => {
    let timeout = 0;
    timeout = timeout + 150;
      setTimeout(() => {
        rune.classList.add('show');
      }, timeout);
  }
  useEffect(() => {
    const runes = document.querySelectorAll('li');
    show && runesListRef.current.scrollIntoView(
      {
        behavior: "smooth",
      }
    );
    runes.forEach(rune => {
      showRunes(rune);
    });
  }, [show, randomRunes]);
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

      {show && <ul ref={runesListRef}>
        {randomRunes &&
          randomRunes.map((rune, idx) => {
            return (
              <li key={uuid()}>
                <h5>
                  {(idx === 0 && 'action') ||
                    (idx === 1 && 'challenge') ||
                    (idx === 2 && 'overview')}
                </h5>
                <img src={rune.src} alt="rune" />
                <h4>{rune.header}</h4>
                <p>{rune.text}</p>
              </li>
            );
          })}
      </ul>}
    </div>
  );
}

export default App;
