const Temple = require("../models/temple");
const mongoose = require("mongoose");

main()
  .then((res) => {
    console.log(`Connected to Database`);
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  mongoose.connect("mongodb://127.0.0.1:27017/JMS");
}

try {
  Temple.insertMany([
    {
      templeName: "Shri Ram Mandir",
      address: "Ram Janmabhoomi, Ayodhya, Uttar Pradesh",
      admin: "6841787504a60c69516b353c",
      tokens: [
        "683d84e50d44d012acc89b49",
        "683d84e50d44d012acc89b4a",
        "683d84e50d44d012acc89b4b",
        "683d84e50d44d012acc89b4b",
        "683d84e50d44d012acc89b4d",
        "683d84e50d44d012acc89b4e",
        "683d84e50d44d012acc89b4f",
        "683d84e50d44d012acc89b50",
      ],
    },
    {
      templeName: "Kashi Vishwanath Temple",
      address: "Lahori Tola, Varanasi, Uttar Pradesh",
      admin: "6841787504a60c69516b353c",
      tokens: [
        "683d84e50d44d012acc89b49",
        "683d84e50d44d012acc89b4a",
        "683d84e50d44d012acc89b4b",
        "683d84e50d44d012acc89b4b",
        "683d84e50d44d012acc89b4d",
        "683d84e50d44d012acc89b4e",
        "683d84e50d44d012acc89b4f",
        "683d84e50d44d012acc89b50",
      ],
    },
    {
      templeName: "Jagannath Temple",
      address: "Grand Road, Puri, Odisha",
      admin: "6841787504a60c69516b353c",
      tokens: [
        "683d84e50d44d012acc89b49",
        "683d84e50d44d012acc89b4a",
        "683d84e50d44d012acc89b4b",
        "683d84e50d44d012acc89b4b",
        "683d84e50d44d012acc89b4d",
        "683d84e50d44d012acc89b4e",
        "683d84e50d44d012acc89b4f",
        "683d84e50d44d012acc89b50",
      ],
    },
    {
      templeName: "Tirupati Balaji Temple",
      address: "Tirumala, Tirupati, Andhra Pradesh",
      admin: "6841787504a60c69516b353c",
      tokens: [
        "683d84e50d44d012acc89b49",
        "683d84e50d44d012acc89b4a",
        "683d84e50d44d012acc89b4b",
        "683d84e50d44d012acc89b4b",
        "683d84e50d44d012acc89b4d",
        "683d84e50d44d012acc89b4e",
        "683d84e50d44d012acc89b4f",
        "683d84e50d44d012acc89b50",
      ],
    },
    {
      templeName: "Vaishno Devi Mandir",
      address: "Katra, Jammu and Kashmir",
      admin: "6841787504a60c69516b353c",
      tokens: [
        "683d84e50d44d012acc89b49",
        "683d84e50d44d012acc89b4a",
        "683d84e50d44d012acc89b4b",
        "683d84e50d44d012acc89b4b",
        "683d84e50d44d012acc89b4d",
        "683d84e50d44d012acc89b4e",
        "683d84e50d44d012acc89b4f",
        "683d84e50d44d012acc89b50",
      ],
    },
    {
      templeName: "Siddhivinayak Temple",
      address: "Prabhadevi, Mumbai, Maharashtra",
      admin: "685ede68a2044d5da6cbbf86",
      tokens: [
        "683d84e50d44d012acc89b49",
        "683d84e50d44d012acc89b4a",
        "683d84e50d44d012acc89b4b",
        "683d84e50d44d012acc89b4b",
        "683d84e50d44d012acc89b4d",
        "683d84e50d44d012acc89b4e",
        "683d84e50d44d012acc89b4f",
        "683d84e50d44d012acc89b50",
      ],
    },
    {
      templeName: "Meenakshi Amman Temple",
      address: "Madurai Main, Madurai, Tamil Nadu",
      admin: "685ede68a2044d5da6cbbf86",
      tokens: [
        "683d84e50d44d012acc89b49",
        "683d84e50d44d012acc89b4a",
        "683d84e50d44d012acc89b4b",
        "683d84e50d44d012acc89b4b",
        "683d84e50d44d012acc89b4d",
        "683d84e50d44d012acc89b4e",
        "683d84e50d44d012acc89b4f",
        "683d84e50d44d012acc89b50",
      ],
    },
    {
      templeName: "Golden Temple (Sri Harmandir Sahib)",
      address: "Golden Temple Road, Amritsar, Punjab",
      admin: "685ede68a2044d5da6cbbf86",
      tokens: [
        "683d84e50d44d012acc89b49",
        "683d84e50d44d012acc89b4a",
        "683d84e50d44d012acc89b4b",
        "683d84e50d44d012acc89b4b",
        "683d84e50d44d012acc89b4d",
        "683d84e50d44d012acc89b4e",
        "683d84e50d44d012acc89b4f",
        "683d84e50d44d012acc89b50",
      ],
    },
    {
      templeName: "Mahakaleshwar Jyotirlinga",
      address: "Jaisinghpura, Ujjain, Madhya Pradesh",
      admin: "685ede68a2044d5da6cbbf86",
      tokens: [
        "683d84e50d44d012acc89b49",
        "683d84e50d44d012acc89b4a",
        "683d84e50d44d012acc89b4b",
        "683d84e50d44d012acc89b4b",
        "683d84e50d44d012acc89b4d",
        "683d84e50d44d012acc89b4e",
        "683d84e50d44d012acc89b4f",
        "683d84e50d44d012acc89b50",
      ],
    },
    {
      templeName: "Maa Bamleshwari Temple",
      address: "Dongargarh, Rajnandgaon, Chhattisgarh",
      admin: "685ede68a2044d5da6cbbf86",
      tokens: [
        "683d84e50d44d012acc89b49",
        "683d84e50d44d012acc89b4a",
        "683d84e50d44d012acc89b4b",
        "683d84e50d44d012acc89b4b",
        "683d84e50d44d012acc89b4d",
        "683d84e50d44d012acc89b4e",
        "683d84e50d44d012acc89b4f",
        "683d84e50d44d012acc89b50",
      ],
    },
  ]);
} catch (error) {
  console.log(error);
}
