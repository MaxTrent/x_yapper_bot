import { TwitterApi } from 'twitter-api-v2';
import * as cron from 'node-cron';
import * as dotenv from 'dotenv';

dotenv.config();

const client = new TwitterApi({
  appKey: process.env.X_API_KEY!,
  appSecret: process.env.X_API_SECRET!,
  accessToken: process.env.X_ACCESS_TOKEN!,
  accessSecret: process.env.X_ACCESS_SECRET!,
});

const rwClient = client.readWrite;
const TOKEN_NAME = process.env.TOKEN_NAME;

const tweetTemplates = [
  `Just discovered ${TOKEN_NAME} and I'm bullish! 🚀`,
  `${TOKEN_NAME} to the moon! Who else is holding? 💎🙌`,
  `Building my ${TOKEN_NAME} bag slowly but surely 📈`,
  `${TOKEN_NAME} community is amazing! LFG! 🔥`,
  `Another day, another ${TOKEN_NAME} accumulation 💪`,
  `${TOKEN_NAME} looking strong today 📊`,
  `Excited about ${TOKEN_NAME} roadmap ahead! 🛣️`,
  `${TOKEN_NAME} holders unite! 🤝`,
  `Bullish vibes today — ${TOKEN_NAME} keeps delivering.`,
      `Not financial advice, but ${TOKEN_NAME} is on my radar.`,
      `Just aped in. ${TOKEN_NAME}, don’t fail me now.`,
  `DCA into ${TOKEN_NAME} every week 💰`,
  `${TOKEN_NAME} fundamentals are solid 🏗️`,
  `${TOKEN_NAME} is the future of web3 ⚡`,
  `Stacking ${TOKEN_NAME} like it's my job 💼`,
  `${TOKEN_NAME} ecosystem growing fast 🌱`,
  `Never selling my ${TOKEN_NAME} bag 💎`,
  `${TOKEN_NAME} utility is underrated 🔧`,
  `Bullish on ${TOKEN_NAME} long term 📈`,
  `${TOKEN_NAME} team delivers every time 👨‍💻`,
  `${TOKEN_NAME} partnerships looking spicy 🌶️`,
  `${TOKEN_NAME} tokenomics make sense 🧮`,
  `${TOKEN_NAME} community strongest in crypto 💪`
];

function getRandomTweet(): string {
  return tweetTemplates[Math.floor(Math.random() * tweetTemplates.length)];
}

async function postTweet() {
  try {
    const tweet = getRandomTweet();
    await rwClient.v2.tweet(tweet);
    console.log(`Posted: ${tweet}`);
  } catch (error) {
    console.error('Error posting:', error);
  }
}

// Schedule tweets
cron.schedule('0 8,12,16,20,23 * * *', postTweet);

console.log('🤖 X bot started!');
console.log(`📝 Token name: ${TOKEN_NAME}`);

process.on('SIGINT', () => {
  console.log('Bot stopped');
  process.exit(0);
});