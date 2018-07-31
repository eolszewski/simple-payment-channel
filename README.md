# simple-payment-channel [![Build Status](https://travis-ci.org/eolszewski/simple-payment-channel.svg?branch=master)](https://travis-ci.org/eolszewski/simple-payment-channel) [![Coverage Status](https://coveralls.io/repos/github/eolszewski/simple-payment-channel/badge.svg?branch=master)](https://coveralls.io/github/eolszewski/simple-payment-channel?branch=master)

Smart contract and tests leveraging a simple one-way payment channel.

For more information on this payment channel, [here's an article on medium](https://medium.com/@eolszewski/counterfactual-for-dummies-part-1-8ff164f78540) I wrote to give you an overview.

If you'd like to see this implemented in a web application with Metamask integration, I am currently working on that [here](https://github.com/eolszewski/ipfs-pubsub-chatroom/tree/features/payment-channel) (even using IPFS pubsub for decentralized messaging!).

## Running the tests

```
$ npm i
$ ganache-cli -m "nose phone clip fee agent crop decorate spell album february oppose anxiety"
$ npm run test
```

## Contributing / Issues
If you find any problems with this repository or see any ways that it can be improved, please feel free to submit a pull request or log an issue.
