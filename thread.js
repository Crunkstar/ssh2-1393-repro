const ssh = require('ssh2');
const client = new ssh.Client();

client.on('ready', () => {
  console.log('client ready');
  client.shell((err, stream) => {
    if(err) throw err;
    stream
      .on('close', () => {
        console.log('stream closed');
      })
      .on('data', (data) => {
        console.log('stream data');
      });
  });
});

console.log('client connect');
client.connect({
  host: process.env.RSCRIPT_HOST,
  port: 22,
  username: process.env.RSCRIPT_USER,
  password: process.env.RSCRIPT_PASS,
});