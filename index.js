const {join} = require('node:path');
const {Worker} = require('node:worker_threads');
const {setTimeout} = require('node:timers/promises');

;(async ()=>{
  console.log('create worker 1');
  const W1 = new Worker(join(__dirname, 'thread.js'));

  console.log('wait 2500ms');
  await setTimeout(2500);

  console.log('terminate worker 1');
  await W1.terminate();

  console.log('create worker 2');
  const W2 = new Worker(join(__dirname, 'thread.js'));

  console.log('wait 2500ms');
  await setTimeout(2500);

  await W2.terminate();
  console.log('terminate worker 2');
})();