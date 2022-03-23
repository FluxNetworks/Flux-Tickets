/* eslint-disable no-console */
const link = require('terminal-link');
const leeks = require('leeks.js');

const {
	version, homepage
} = require('../package.json');

module.exports = () => {
	console.log(leeks.colours.cyan(`
   /$$$$$$$$ /$$                           /$$$$$$$$ /$$           /$$                   /$$             
   | $$_____/| $$                          |__  $$__/|__/          | $$                  | $$             
   | $$      | $$ /$$   /$$ /$$   /$$         | $$    /$$  /$$$$$$$| $$   /$$  /$$$$$$  /$$$$$$   /$$$$$$$
   | $$$$$   | $$| $$  | $$|  $$ /$$/         | $$   | $$ /$$_____/| $$  /$$/ /$$__  $$|_  $$_/  /$$_____/
   | $$__/   | $$| $$  | $$ \  $$$$/          | $$   | $$| $$      | $$$$$$/ | $$$$$$$$  | $$   |  $$$$$$ 
   | $$      | $$| $$  | $$  >$$  $$          | $$   | $$| $$      | $$_  $$ | $$_____/  | $$ /$$\____  $$
   | $$      | $$|  $$$$$$/ /$$/\  $$         | $$   | $$|  $$$$$$$| $$ \  $$|  $$$$$$$  |  $$$$//$$$$$$$/
   |__/      |__/ \______/ |__/  \__/         |__/   |__/ \_______/|__/  \__/ \_______/   \___/ |_______/ 
   
`));
	console.log(leeks.colours.cyanBright(`Flux Tickets bot v${version} by FluxNetworks`));
	console.log(leeks.colours.cyanBright(homepage + '\n'));
	console.log(leeks.colours.cyanBright(link('Sponsor this project', 'https://fluxnetworks.xyz/sponsor') + '\n'));
};
