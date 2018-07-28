const SimplePaymentChannel = artifacts.require('./SimplePaymentChannel.sol');
const utils = require('./utils.js');
require('truffle-test-utils').init();

contract('SimplePaymentChannel', accounts => {

  let spc;

  before(async () => {
    spc = await SimplePaymentChannel.new(accounts[1], 60, { from: accounts[0], value: 10e18 });
  });

  it('has the correct sender', async () => {
    assert(accounts[0] == await spc.sender.call());
  });

  it('can create a valid signed message', async () => {
    let message = await utils.constructPaymentMessage(spc.address, 1e13);
    let signature = await utils.signMessage(web3, message, accounts[0]);

    assert(await utils.isValidSignature(spc.address, 1e13, signature, accounts[0]));
  });
});
