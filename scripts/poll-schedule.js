const { parentPort } = require('worker_threads');
module.exports = {
  friendlyName: 'Poll schedule',

  description: '',

  fn: async function () {
    sails.log('Running custom shell script... (`sails run poll-schedule`)');

    return exits.success();
  },
};
