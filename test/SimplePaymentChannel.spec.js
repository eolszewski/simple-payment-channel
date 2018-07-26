const SimplePaymentChannel = artifacts.require('./SimplePaymentChannel.sol');
const { assertFail } = require('./utils.js');
require('truffle-test-utils').init();

contract('SimplePaymentChannel', accounts => {

  let spc;

  before(async () => {
    spc = await SimplePaymentChannel.new(accounts[1], 60, { from: accounts[0], value: 1e18 });
  });

  it('has the correct sender', async () => {
    assert(accounts[0] == await spc.sender.call());
  });
});