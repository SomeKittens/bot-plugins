module.exports = function(bot) {

  responses = [
    'Om nom nom!',
    'That\'s very nice of you!',
    'Oh thx, have a cookie yourself!',
    'Thank you very much.',
    'Thanks for the treat!',
    'You perv, you can\'t win me over like that'
  ];
  
  function botsnack(msg) {
    msg.send(responses.random());
  }

  bot.addCommand({
    fun : botsnack,
    name : 'botsnack',
    permissions : {
        del : 'NONE'
    },

    description : 'I\'ve been good, ' +
      'give me a snack!'
  });
};