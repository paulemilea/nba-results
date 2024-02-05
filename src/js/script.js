// @ts-nocheck
'use strict';

import { displayGames } from './modules/displayGames.js';
import { getGamesByDate } from './modules/getGamesByDate.js';
import { displayMessage } from './modules/helpers.js';

const gameDateLabel = document.querySelector('label');
const gameDateInput = document.querySelector('#game-date');
const gamesContainerEl = document.querySelector('.games-container');

gameDateInput.addEventListener('change', async function () {
  try {
    while (gamesContainerEl.firstChild) {
      gamesContainerEl.removeChild(gamesContainerEl.firstChild);
    }

    const data = await getGamesByDate(gameDateInput.value);

    if (!data.length) {
      displayMessage(
        gameDateLabel,
        `It seems that no games were played on ${gameDateInput.value}. Try another date! 😉`
      );
    } else {
      displayMessage(gameDateLabel);
      displayGames(data, gamesContainerEl);
    }
  } catch (err) {
    console.error('Error handling games:', err);
  }
});
