const express = require('express');
const os = require('os');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head><title>Node.js Docker Demo</title></head>
      <body style="font-family: sans-serif; text-align: center; margin-top: 80px;">
        <h1>🚀 Hello from Izzy's Node.js App!</h1>
        <p>Running inside a Docker container.</p>
        <p>Hostname: ${os.hostname()}</p>
        <p>Server time: ${new Date().toLocaleString()}</p>
      </body>
    </html>
  `);
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', uptime: process.uptime() });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
