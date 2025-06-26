module.exports = {
  apps: [{
    name: 'x-yapper-bot',
    script: 'ts-node',
    args: 'bot/x-bot.ts',
    watch: false,
    autorestart: true,
    max_restarts: 10,
    min_uptime: '10s'
  }]
};