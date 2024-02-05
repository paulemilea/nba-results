// @ts-nocheck
/**
 * The displayGames function creates a DOM element for each game in the given data array
 * @param {Promise<Array>} data A Promise that resolves to an array of game objects
 * @param {HTMLElement} el The DOM element to which the games information will be appended
 */
export function displayGames(data, el) {
  data.forEach((game) => {
    const html = `
      <article class="flex justify-between items-center bg-slate-400 p-2.5">
        <div>
          <img src="img/${game.home_team.name}.png" alt="${game.home_team.full_name} logo" class="max-w-28 mb-2.5" />
          <p class="text-2xl font-medium text-center">${game.home_team_score}</p>
        </div>
        <div>
          <img src="img/${game.visitor_team.name}.png" alt="${game.visitor_team.full_name} logo" class="max-w-28 mb-2.5" />
          <p class="text-2xl font-medium text-center">${game.visitor_team_score}</p>
        </div>
      </article>
    `;

    el.insertAdjacentHTML('beforeend', html);
  });
}
