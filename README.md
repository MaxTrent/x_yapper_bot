# X Bot for yapping

Simple Automated X bot that posts random content randomly daily, always including your keyword(token name).

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Add your X credentials to `.env`:**
  

3. **Run with PM2:**
   ```bash
   npm run pm2
   ```

## Commands

- **Start bot (temporary):** `npm start`
- **Start bot (continuous):** `npm run pm2`
- **Check status:** `npx pm2 status`
- **Stop bot:** `npx pm2 stop x-yapper-bot`
- **Restart bot:** `npx pm2 restart x-yapper-bot`

## Features

- Posts randomly daily
- random posts templates with "token name"
- Error handling and logging