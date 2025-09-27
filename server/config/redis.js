const { createClient } = require("redis");

const redisClient = createClient({
  socket: {
    host: process.env.REDIS_HOST,
    port: parseInt(process.env.REDIS_PORT, 10),
  },
});

redisClient.on("error", (err) => {
  console.log(`Redis not connected!`);
});

redisClient.on("connect", () => console.log(`Connected to redis as well!`));

(async () => {
  await redisClient.connect();
})();

module.exports = redisClient;
