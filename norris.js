module.exports = function (bot, IO) {

function norris ( args, cb ) {
	var chucky = 'http://api.icndb.com/jokes/random';

	IO.request({
		url : chucky,
		complete : finishCall,
	});

	function finishCall ( resp ) {
		var msg;

		if ( resp.type !== 'success' ) {
			msg = 'Chuck Norris is too awesome for this API. Try again.';
		}
		else {
			msg = IO.decodehtmlEntities( resp.value.joke );
		}

		if ( cb && cb.call ) {
			cb( msg );
		}
		else {
			args.reply( msg );
		}
	}
}

bot.addCommand({
	name : 'norris',
	fun : norris,

	permissions : { del : 'NONE', use : 'ALL' },
	description : 'Random chuck norris joke!',
	async : true
});

};
