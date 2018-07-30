# simple-payment-channel [![Build Status](https://travis-ci.org/eolszewski/simple-payment-channel.svg?branch=master)](https://travis-ci.org/eolszewski/simple-payment-channel) [![Coverage Status](https://coveralls.io/repos/github/eolszewski/simple-payment-channel/badge.svg?branch=master)](https://coveralls.io/github/eolszewski/simple-payment-channel?branch=master)

Work in Progress

It's basically Lightning on Ethereum.

Example app leveraging a simple uni-directional payment channel 

So, right now this isn't an application yet - that will be coming tomorrow (July 30) - to keep up with progress on it, check out https://github.com/eolszewski/ipfs-pubsub-chatroom/tree/features/payment-channel (i'm having trouble with the signalling server right now, so waiting on that to clear up)

I just was impatient to getting something out and all the tests are passing...

So, if you want to grab this and take a look at the tests, feel free to - for more information on this payment channel, [here's an article on medium](https://medium.com/@eolszewski/counterfactual-for-dummies-part-1-8ff164f78540) I wrote to give you an overview.

## Setup (To run the tests)

```
$ npm i
$ npm run test
```

And there will be an application that uses this with Metamask - I swear, it'll be interactive and cool.
