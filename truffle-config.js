const Web3 = require('web3');

module.exports = {
  migrations_directory: './migrations',
  networks: {
    development: {
      provider: new Web3.providers.HttpProvider(
        "http://localhost:8545"
      ),
      network_id: '*' // Match any network id
    }
  }
}