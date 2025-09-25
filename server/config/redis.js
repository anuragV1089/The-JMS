const { createClient } = require("redis");

const redisClient = createClient();

redisClient.on("error", (err) => {
  console.log(`Redis not connected!`);
});

redisClient.on("connect", () => console.log(`Connected to redis as well!`));

(async () => {
  await redisClient.connect();
})();

module.exports = redisClient;
