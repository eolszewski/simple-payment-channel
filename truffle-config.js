require('dotenv').config();
const Web3 = require('web3');

module.exports = {
  migrations_directory: './migrations',
  networks: {
    development: {
      provider: new Web3.providers.HttpProvider(
        "http://localhost:8545"
      ),
      mnemonic: 'nose phone clip fee agent crop decorate spell album february oppose anxiety',
      network_id: '*' // Match any network id,
    }
  }
}