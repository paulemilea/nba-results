// @ts-nocheck
import { getSeasonYear, toggleSpinnerVisibility } from './helpers.js';

/**
 * The getGamesByDate function retrieves NBA games from the balldontlie API on a given date
 * @param {String} date The date submitted by the user
 * @returns {Promise<Array>} The resolved promise with the games information
 */
export async function getGamesByDate(date) {
  toggleSpinnerVisibility();
  try {
    const seasonYear = getSeasonYear(date);

    const res = await fetch(
      `https://www.balldontlie.io/api/v1/games?seasons[]=${seasonYear}&start_date=${date}&end_date=${date}`
    );

    if (!res.ok) throw new Error(`Failed to fetch. Status: ${res.status}`);

    const data = await res.json();
    const { data: games } = data;

    return games;
  } catch (err) {
    console.error('Error fetching or processing games:', err);
  } finally {
    toggleSpinnerVisibility();
  }
}
