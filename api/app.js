const express = require('express');
const app = express();
let http = require('http').Server(app);
app.use(express.json());

let { createClient } = require('redis');
let client = createClient();

let io = require('socket.io')(http);

app.get('/', (req, res) => { res.json({ message: "welcome2redipollApi" }) });

app.post('/createPoll', async (req, res) => {
  await client.set('redo', 'vallaredo');
  const value = await client.get('redo');

  res.json({ message: value });
});



io.on('connection', async (socket) => {
  console.log('Bir kullanıcı bağlandı.' + socket.id);
  let online = await client.get('online');
  client.incr('online');
  io.emit('online', parseInt(online) + 1);

  socket.on('welcome', async (msg) => {
    console.log(msg);
    //io.emit('welcome', msg);
  });

  // client.on('message', async (channel, message) => {
  //     if (channel === 'online') {
  //         console.log(message);
  //     }
  // });

  socket.on('disconnect', async () => {
    online = await client.get('online');
    await client.decr('online');
    console.log('Bir kullanıcı ayrıldı.' + socket.id);
    io.emit('online', parseInt(online) - 1);
  });
});

const PORT = 3000;
http.listen(PORT, async () => {
  console.log(`Sunucu port ${PORT} 'de çalışıyor.`);
  await client.connect();
  await client.set('online', 0);
});