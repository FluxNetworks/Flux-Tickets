/**
 * ###############################################################################################
   /$$$$$$$$ /$$                           /$$$$$$$$ /$$           /$$                   /$$             
 *| $$_____/| $$                          |__  $$__/|__/          | $$                  | $$             
 *| $$      | $$ /$$   /$$ /$$   /$$         | $$    /$$  /$$$$$$$| $$   /$$  /$$$$$$  /$$$$$$   /$$$$$$$
 *| $$$$$   | $$| $$  | $$|  $$ /$$/         | $$   | $$ /$$_____/| $$  /$$/ /$$__  $$|_  $$_/  /$$_____/
 *| $$__/   | $$| $$  | $$ \  $$$$/          | $$   | $$| $$      | $$$$$$/ | $$$$$$$$  | $$   |  $$$$$$ 
 *| $$      | $$| $$  | $$  >$$  $$          | $$   | $$| $$      | $$_  $$ | $$_____/  | $$ /$$\____  $$
 *| $$      | $$|  $$$$$$/ /$$/\  $$         | $$   | $$|  $$$$$$$| $$ \  $$|  $$$$$$$  |  $$$$//$$$$$$$/
 *|__/      |__/ \______/ |__/  \__/         |__/   |__/ \_______/|__/  \__/ \_______/   \___/ |_______/ 
 * ###############################################################################################
 * ---------------------
 *       Support
 * ---------------------
 *
 * 	> Documentation: https://fluxnetworks.xyz/wiki
 * 	> Discord support server: https://fluxnetworks.xyz/discord
 *
 * ###############################################################################################
 */


module.exports = {
	defaults: {
		colour: '#009999',
		log_messages: true,
		name_format: 'ticket-{number}',
		opening_message: 'Hello {name}, thank you for creating a ticket. A member of staff will soon be available to assist you.\n\n__All messages in this channel are stored for future reference.__'
	},
	developer: { debug: false },
	locale: 'en-GB',
	logs: {
		enabled: true,
		keep_for: 30,
		split: true
	},
	max_listeners: 10,
	plugins: [],
	presence: {
		duration: 60,
		presences: [
			{
				activity: '/new',
				type: 'PLAYING'
			},
			{
				activity: 'with tickets',
				type: 'PLAYING'
			},
			{
				activity: 'tickets',
				type: 'WATCHING'
			}
		],
		randomise: true
	},
	super_secret_setting: true,
	update_notice: true
};