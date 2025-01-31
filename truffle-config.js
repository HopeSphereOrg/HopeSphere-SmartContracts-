require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545, // Ganache
      network_id: "*",
    },
    goerli: {
      provider: () =>
        new HDWalletProvider(
          process.env.PRIVATE_KEY,
          "https://goerli.infura.io/v3/" + process.env.INFURA_API_KEY
        ),
      network_id: 5, // Goerli network
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
    mainnet: {
      provider: () =>
        new HDWalletProvider(
          process.env.PRIVATE_KEY,
          "https://mainnet.infura.io/v3/" + process.env.INFURA_API_KEY
        ),
      network_id: 1, // Mainnet
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
  },
  compilers: {
    solc: {
      version: "0.8.19",
    },
  },
};
