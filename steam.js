const fs = require("fs");

const API_KEY = process.env.STEAM_API_KEY;
const STEAM_ID = process.env.STEAM_ID;

const url =
    `https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v1/` +
    `?key=${API_KEY}&steamid=${STEAM_ID}&format=json`;

async function updateSteam() {

    const response = await fetch(url);
    const data = await response.json();

    const games = data.response.games || [];

    fs.writeFileSync(
        "dashboard/steam.json",
        JSON.stringify(games, null, 2)
    );

    console.log("Steam updated!");
}

updateSteam();
